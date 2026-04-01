import coffee from '@/assets/coffee.svg';
import dribble from '@/assets/dribble.svg';
import github from '@/assets/github.svg';
import linkedin from '@/assets/linkedin.svg';
import twitter from '@/assets/twitter.svg';
import youtube from '@/assets/youtube.svg';
import instagram from '@/assets/instagram.svg';

export const repoStats = {
  forks: 12,
  stars: 21,
};

export const floatingIcons = [
  { src: coffee.src, alt: 'Coffee', className: 'top-5 left-[8%]' },
  { src: dribble.src, alt: 'Dribble', className: 'top-[10%] left-[2%]' },
  { src: github.src, alt: 'GitHub', className: 'top-[20%] left-[15%]' },
  { src: linkedin.src, alt: 'LinkedIn', className: 'bottom-[10%] left-[5%]' },
  { src: twitter.src, alt: 'Twitter', className: 'bottom-[20%] left-[20%]' },
  { src: youtube.src, alt: 'YouTube', className: 'bottom-[20%] right-[20%]' },
  { src: instagram.src, alt: 'Instagram', className: 'bottom-[10%] right-[5%]' },
  { src: coffee.src, alt: 'Coffee', className: 'top-[20%] right-[15%]' },
  { src: github.src, alt: 'GitHub', className: 'top-[10%] right-[2%]' },
  { src: dribble.src, alt: 'Dribble', className: 'top-5 right-[8%]' },
];
