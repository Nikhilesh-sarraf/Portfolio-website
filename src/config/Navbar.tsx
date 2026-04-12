export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  /** Shown next to the Resume nav link for quick download */
  resumePdfHref: '/resume/nikhilesh-resume.pdf',
  resumePdfDownloadName: 'Nikhilesh-Sarraf-Resume.pdf',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Education',
      href: '/education',
    },
    {
      label: 'Resume',
      href: '/resume',
    },
  ] as NavItem[],
};
