// queries/getContactMe.ts
import { ContactMe } from '../types';

const STATIC_CONTACT: ContactMe = {
  profilePicture: { url: '' },
  name: 'Prachi Hemant Dudhe',
  title: 'Graduate Student • AI/ML & Data Science',
  summary: "Hi, I’m Prachi — a grad student at Texas A&M exploring AI/ML. I’ve built resume-matching bots, traffic detectors, and a Fitbit dashboard that sometimes tells me to skip dessert. I love turning messy data into clear insights.",
  companyUniversity: 'Texas A&M University, Texas, USA',
  linkedinLink: 'https://www.linkedin.com/in/prachi-dudhe',
  email: 'pra24@tamu.edu',
  phoneNumber: '(979) 721-2564'
};

export async function getContactMe(): Promise<ContactMe> {
  return STATIC_CONTACT;
}
