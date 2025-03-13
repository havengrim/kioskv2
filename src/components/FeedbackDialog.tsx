import { useEffect, useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
import { Player } from "@lottiefiles/react-lottie-player";
import images from "@/assets/images";
import happyAnimated from "@/assets/happy-animated.json";
import neutralAnimated from "@/assets/neutral-animated.json";
import sadAnimated from "@/assets/sad-animated.json";

const quotes = {
  Happy: [
   "Hey, I see you're feeling great today! Keep that energy going! 😊",
  "You're doing awesome! Keep shining and spreading those good vibes. ✨",
  "That smile looks good on you! Stay happy and enjoy your day! 😃",
  "Your positivity is contagious! Keep being amazing. 💛",
  "Today is a great day, and so are you! Keep the happiness flowing! 🌈",
  ],
  Neutral: [
    "It's okay to have a neutral day. Keep going! 💪",
    "You're doing great, one step at a time. 🚀",
    "Sometimes, 'okay' is enough. Keep pushing forward! 👏",
  ],
  Sad: [
    "You're not alone. Better days are coming. 💙",
    "It's okay to feel down. Just don't stay there. 🌈",
    "You got this. Even storms pass. ☀️",
  ],
};

const getRandomQuote = (mood: "Happy" | "Neutral" | "Sad") => {
  const moodQuotes = quotes[mood];
  return moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
};

const handleSubmit = (
  mood: "Happy" | "Neutral" | "Sad",
  setOpen: (open: boolean) => void,
  setSelectedMood: (mood: "Happy" | "Neutral" | "Sad" | null) => void,
  setQuote: (quote: string) => void
) => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScIgtP3u_LjAEPqIxtJWWNRgjWMlSjiZgOIFajeQGwQMTLnhw/formResponse";
  const formData = new FormData();
  formData.append("entry.1119164033", mood);

  fetch(formUrl, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  }).then(() => {
    setSelectedMood(mood);
    setQuote(getRandomQuote(mood));

    setTimeout(() => {
      setOpen(false);
      setSelectedMood(null);
    }, 30000);

    // toast.success(`Thank you for your feedback! 🎉 (${mood})`);
    sessionStorage.setItem("lastInteraction", String(Date.now()));
  });
};

const FeedbackDialog = () => {
  const [open, setOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState<"Happy" | "Neutral" | "Sad" | null>(null);
  const [quote, setQuote] = useState("");
  const lastActivityTimeRef = useRef<number | null>(null);
  const activityTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const lastInteraction = sessionStorage.getItem("lastInteraction");
    const now = Date.now();
    if (lastInteraction && now - Number(lastInteraction) < 2 * 60 * 1000) return;

    const handleUserInteraction = () => {
      if (!lastActivityTimeRef.current) lastActivityTimeRef.current = Date.now();
      if (activityTimerRef.current) clearTimeout(activityTimerRef.current);

      activityTimerRef.current = setTimeout(() => {
        if (Date.now() - (lastActivityTimeRef.current || 0) >= 30 * 1000) {
          setOpen(true);
          sessionStorage.setItem("lastInteraction", String(Date.now()));
        }
      }, 30 * 1000);
    };

    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      if (activityTimerRef.current) clearTimeout(activityTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (open) {
      const autoCloseTimer = setTimeout(() => setOpen(false), 2 * 60 * 1000);
      return () => clearTimeout(autoCloseTimer);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl rounded-3xl bg-white shadow-2xl p-12 border border-gray-300 mx-auto">
        {selectedMood ? (
          <div className="flex flex-col items-center">
            <Player
              autoplay
              loop
              src={selectedMood === "Happy" ? happyAnimated : selectedMood === "Neutral" ? neutralAnimated : sadAnimated}
              style={{ width: 300, height: 300 }}
            />
            <h1 className="mt-4 text-xl font-semibold text-gray-800 text-center">{quote}</h1>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
                How are you feeling today?
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600 text-center mt-6">
                Your feedback helps us improve. Please let us know how you're feeling.
              </DialogDescription>
            </DialogHeader>

            <div className="flex justify-center gap-12 mt-14 mb-8">
              <Button
                onClick={() => handleSubmit("Happy", setOpen, setSelectedMood, setQuote)}
                className="flex flex-col items-center gap-4 px-12 py-8 bg-white hover:bg-white rounded-2xl transition-all"
              >
                <img src={images.happy} alt="Happy" className="w-32 h-32" />
                <span className="text-gray-800 font-semibold text-2xl">Happy</span>
              </Button>

              <Button
                onClick={() => handleSubmit("Neutral", setOpen, setSelectedMood, setQuote)}
                className="flex flex-col items-center gap-4 px-12 py-8 bg-white hover:bg-white rounded-2xl transition-all"
              >
                <img src={images.okay} alt="Neutral" className="w-32 h-32" />
                <span className="text-gray-800 font-semibold text-2xl">Okay na 'to</span>
              </Button>

              <Button
                onClick={() => handleSubmit("Sad", setOpen, setSelectedMood, setQuote)}
                className="flex flex-col items-center gap-4 px-12 py-8 bg-white hover:bg-white rounded-2xl transition-all"
              >
                <img src={images.sad} alt="Sad" className="w-32 h-32" />
                <span className="text-gray-800 font-semibold text-2xl">Sad</span>
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;
