import Logo from "@/common/brand/Logo";
import { Button } from "@/common/ui/button";
import LoadingAnimation from "@/common/ui/loadingAnimation";
import { Typography } from "@/common/ui/typography";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center text-center justify-between p-24">
      <h1 className="text-4xl font-black text-center text-emerald-1000">
        Hello Nerd
      </h1>
      <Logo theme="dark" />
      <LoadingAnimation />
      <Button variant={'primary'}> Hello World </Button>
      <Button variant={'bordered'}> Hello World </Button>
      <Button variant={'secondary'}> Hello World </Button>
      <Button variant={'link'}> Hello World </Button>
      <Typography variant={'title'} className="w-1/2">App hosting done like never before</Typography>
      <Typography variant={'paragraph'} className="w-1/2">App hosting done like never before</Typography>
    </div>
  );
}
