export type SettingValue = string | number | boolean | Record<string, unknown> | Array<unknown> | null;

export class SettingsRegistry {
  private readonly values = new Map<string, SettingValue>();

  set(key: string, value: SettingValue) {
    this.values.set(key, value);
  }

  get(key: string) {
    return this.values.get(key);
  }

  entries() {
    return Array.from(this.values.entries());
  }
}
