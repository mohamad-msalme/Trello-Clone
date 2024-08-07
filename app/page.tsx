import { Button } from "@/components/ui/button";
import { ThemeButton } from "@/components/ui/ThemeButton";

export default function Home() {
  return (
    <div>
      <Button variant="link" asChild  >
        <a>Test</a>
      </Button>
      <ThemeButton />
    </div>
  );
}
