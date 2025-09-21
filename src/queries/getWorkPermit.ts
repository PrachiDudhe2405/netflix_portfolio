// queries/getWorkPermit.ts
import { WorkPermit } from '../types';

const STATIC_WORK_PERMIT: WorkPermit = {
  visaStatus: 'Eligible to work in the U.S. (Student status)',
  expiryDate: new Date('2026-05-31'),
  summary: 'Open to internships and full-time roles. Location: Texas, USA.',
  additionalInfo: ''
};

export async function getWorkPermit(): Promise<WorkPermit> {
  return STATIC_WORK_PERMIT;
}
