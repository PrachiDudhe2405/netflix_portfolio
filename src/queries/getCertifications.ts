// queries/getCertifications.ts
import { Certification } from '../types';

const STATIC_CERTS: Certification[] = [
  { title: '5G Introductory Certification', issuer: 'Qualcomm Wireless Academy', issuedDate: '2025', link: '/certificate/5g-introductory', iconName: '5g' },
  { title: 'Intermediate SQL / Joining Data in SQL', issuer: 'DataCamp', issuedDate: '2024', link: '#', iconName: 'sql' },
  { title: 'Advanced C Programming & Unix Internals', issuer: 'Uttara Computers', issuedDate: '2022', link: '/certificate/advanced-c-unix', iconName: 'c' }
];

export async function getCertifications(): Promise<Certification[]> {
  return STATIC_CERTS;
}
