import { randomUUID } from 'node:crypto';

export function generateRequestId(incomingRequestId?: string | string[]) {
  if (typeof incomingRequestId === 'string' && incomingRequestId.length > 0) {
    return incomingRequestId;
  }

  return randomUUID();
}
