import { BottomNav } from '@/components';

function SectionMain({ title, className, children }: danamit.PageProps): JSX.Element {
  return (
    <>
      <main title={title}>
        <article className={className}>{children}</article>
      </main>
      <BottomNav />
    </>
  );
}

export default SectionMain;
