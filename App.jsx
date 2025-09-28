import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile 
        name="SparkPlug" 
        age={21} 
        bio="Coding, fitness, and creativity lover 🚀" 
      />
      <UserProfile 
        name="Martha" 
        age={22} 
        bio="I’m a front-end developer who loves design and innovation 💡" 
      />
      <Footer />
    </div>
  );
}

export default App;

