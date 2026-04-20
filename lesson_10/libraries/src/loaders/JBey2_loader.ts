import csv from 'csv-parser';
import fs from 'fs';
import { Credit, MediaItem } from '../models/index.js';
import { Loader } from './loader.js';

export class JBeyLoader2 implements Loader {
  getLoaderName(): string {
    return 'JBey2';
  }

  async loadData(): Promise<MediaItem[]> {
    const credits = await this.loadCredits();
    const mediaItems = await this.loadMediaItems();

    // Creates a Map using each media item's ID as the key. This makes it easy
    // to look up a specific media item by ID later - Instead of looping through
    // the whole array every time.
    const mediaMap = new Map<string, MediaItem>();
    for (const media of mediaItems) {
      mediaMap.set(media.getId(), media);
    }

    // Loops through every credit, finds which media item
    // t belongs to using getMediaItemId(), and adds that
    // credit to the media item with addCredit().
    for (const credit of credits) {
      const mediaItem = mediaMap.get(credit.getMediaItemId());
      if (mediaItem) {
        mediaItem.addCredit(credit);
      }
    }

    console.log(
      `Loaded ${credits.length} credits and ${mediaItems.length} media items`,
    );

    return [...mediaItems.values()];
  }

  async loadMediaItems(): Promise<MediaItem[]> {
    const mediaItems = [];
    const readable = fs
      .createReadStream('data/media_items.csv', 'utf-8')
      .pipe(csv());
    for await (const row of readable) {
      const { id, title, type, year } = row;
      mediaItems.push(new MediaItem(id, title, type, year, []));
    }
    return mediaItems;
  }

  async loadCredits(): Promise<Credit[]> {
    const credits = [];
    const readable = fs
      .createReadStream('data/credits.csv', 'utf-8')
      .pipe(csv());
    for await (const row of readable) {
      const { media_item_id, role, name } = row;
      credits.push(new Credit(media_item_id, name, role));
    }
    return credits;
  }
}