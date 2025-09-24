// queries/getCertifications.ts
import { Certification } from '../types';

const STATIC_CERTS: Certification[] = [
  { title: '5G Introductory Certification', issuer: 'Qualcomm Wireless Academy', issuedDate: '2025', link: '/certificate/5g-introductory', iconName: '5g' },
  { title: 'Foundations of Git', issuer: 'Coursera', issuedDate: '2024', link: '/certificate/foundations-git', iconName: 'git' },
  { title: 'Introduction to Python', issuer: 'DataCamp', issuedDate: '2024', link: '/certificate/introduction-python', iconName: 'python' },
  { title: 'Introduction to Data Visualization with Seaborn', issuer: 'DataCamp', issuedDate: '2024', link: '/certificate/data-visualization-seaborn', iconName: 'datacamp' },
  { title: 'Joining Data in SQL', issuer: 'DataCamp', issuedDate: '2024', link: '/certificate/joining-data-sql', iconName: 'sql' },
  { title: 'Intermediate SQL', issuer: 'DataCamp', issuedDate: '2024', link: '/certificate/intermediate-sql', iconName: 'sql' },
  { title: 'Data Manipulation with pandas', issuer: 'DataCamp', issuedDate: '2024', link: '/certificate/data-manipulation-pandas', iconName: 'pandas' },
  { title: 'Advanced C Programming & Unix Internals', issuer: 'Uttara Computers', issuedDate: '2022', link: '/certificate/advanced-c-unix', iconName: 'c' }
];

export async function getCertifications(): Promise<Certification[]> {
  return STATIC_CERTS;
}
