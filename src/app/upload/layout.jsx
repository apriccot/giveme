import Navbar from '../../widgets/navbar/ui';
import Footer from '../../widgets/footer/Footer';
export default function layout({ children }) {
  return (
    <div className="bg-pink h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
