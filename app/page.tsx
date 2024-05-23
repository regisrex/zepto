import { Button } from "@/common/ui/button";
import LoadingAnimation from "@/common/ui/loadingAnimation";
import { Typography } from "@/common/ui/typography";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center text-center justify-between p-24">
      <LoadingAnimation />
      <h1 className="text-4xl font-black text-center bg-gradient-to-br from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
        Zepto
      </h1>
      {/* <Logo theme="dark" /> */}
      <Typography variant={'title'} className="">A web starter template for starting apps easily</Typography>
      <Typography variant={'paragraph'} className="w-1/2">website starter with preconfigured things to bootstrap your site faster</Typography>
      <div className="flex items-center gap-6">
        <Button variant={'primary'}>Button</Button>
        <Button variant={'bordered'}>Button</Button>
        <Button variant={'secondary'}>Button</Button>
        <Button variant={'link'}>Button</Button>
      </div>
    </div>
  );
}
