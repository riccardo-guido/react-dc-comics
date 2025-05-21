import Alert from "../ui/Alert"
export default function Main() {
  return (
    <main>
      <section id="main-section">
        <div className="container">
          
        
          <Alert 
            message="Attenzione! Qualcosa è andato storto." 
            // textColor="#856404" 
            // backgroundColor="#fff3cd" 
          />

          <h1>--&gt;Content goes here&lt;--</h1>
        </div>
      </section>
    </main>
  );
}