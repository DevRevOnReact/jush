// components/DynamicComponent.tsx
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('./page'),  // Путь к вашему компоненту
  { ssr: false }  // Отключение серверного рендеринга
);

export default DynamicComponentWithNoSSR;
