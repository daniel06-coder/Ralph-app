
import Footer from "@/components/Footer";
import StoriesNavigation from "./discover-stories/components/StoriesNavigation";

export default function StoriesLayout({ children }) {
  return (
    <div>
      <StoriesNavigation />
      {children}
      <Footer />
    </div>
  );
}
