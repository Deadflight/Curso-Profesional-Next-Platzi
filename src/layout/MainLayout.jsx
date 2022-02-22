import Header from '@components/Header';
import Nav from '@common/Nav';

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />

        <div className="max-w-7xl mx-auto pt-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </div>
    </>
  );
}
