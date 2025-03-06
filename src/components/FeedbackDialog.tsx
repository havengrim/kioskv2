import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import images from "@/assets/images";
import { toast } from "sonner";
const handleSubmit = (mood: string) => {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScIgtP3u_LjAEPqIxtJWWNRgjWMlSjiZgOIFajeQGwQMTLnhw/formResponse";
  const formData = new FormData();

  formData.append("entry.1119164033", mood);

  fetch(formUrl, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  }).then(() => {
    toast.success(`Thank you for your feedback! 🎉 (${mood})`);
  });
};

const Barometer = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(true);
    }, 5000); // Show every 2 minutes

    return () => clearInterval(interval);
  }, []);


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl rounded-3xl bg-white shadow-2xl p-12 border border-gray-300">
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
            onClick={() => {
              handleSubmit("Happy");
              setOpen(false);
            }}
            className="flex flex-col items-center gap-4 px-12 py-8 bg-white hover:bg-white rounded-2xl transition-all"
          >
            <img src={images.happy} alt="Happy" className="w-32 h-32" />
            <span className="text-gray-800 font-semibold text-2xl">Happy</span>
          </Button>

          <Button
            onClick={() => {
              handleSubmit("Neutral");
              setOpen(false);
            }}
            className="flex flex-col items-center gap-4 px-12 py-8 bg-white hover:bg-white rounded-2xl transition-all"
          >
            <img src={images.okay} alt="Neutral" className="w-32 h-32" />
            <span className="text-gray-800 font-semibold text-2xl">Okay na 'to</span>
          </Button>

          <Button
            onClick={() => {
              handleSubmit("Sad");
              setOpen(false);
            }}
            className="flex flex-col items-center gap-4 px-12 py-8 bg-white hover:bg-white rounded-2xl transition-all"
          >
            <img src={images.sad} alt="Sad" className="w-32 h-32" />
            <span className="text-gray-800 font-semibold text-2xl">Sad</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Barometer;
