export type UploadTarget = {
  path: string;
  acceptedTypes: string[];
  maxSizeBytes: number;
};

export function validateUploadTarget(file: File, target: UploadTarget) {
  return target.acceptedTypes.includes(file.type) && file.size <= target.maxSizeBytes;
}
