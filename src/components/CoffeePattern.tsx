function CoffeeBeanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-25 40 40)">
        <path
          d="M40 10 C52 10 62 18 66 30 C70 42 66 56 56 64 C46 72 34 72 24 64 C14 56 10 42 14 30 C18 18 28 10 40 10 Z"
          fill="#8B5A3C"
        />
        <path
          d="M40 16 C44 28 44 52 40 64"
          stroke="#2A1810"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M28 22 C24 32 24 48 28 58"
          stroke="#C4A88F"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}

function CoffeeCupIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="55" cy="98" rx="42" ry="6" fill="#6B4423" opacity="0.3" />
      <path
        d="M25 45 L25 85 C25 92 35 98 55 98 C75 98 85 92 85 85 L85 45 Z"
        fill="#8B5A3C"
        stroke="#4A2F18"
        strokeWidth="2"
      />
      <ellipse cx="55" cy="45" rx="30" ry="8" fill="#4A2F18" />
      <ellipse cx="55" cy="46" rx="26" ry="6" fill="#3D2314" />
      <ellipse cx="55" cy="47" rx="22" ry="4" fill="#2A1810" opacity="0.6" />
      <path
        d="M85 52 C100 52 108 60 108 70 C108 80 100 88 85 88"
        stroke="#6B4423"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M42 30 Q48 18 55 12 Q62 18 68 30" stroke="#C4A88F" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M50 22 Q55 10 60 22" stroke="#D9C9B8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}

function CoffeeSteamIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 75 Q5 55 15 35 Q25 15 15 5" stroke="#A67C52" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 75 Q20 50 30 25 Q40 5 30 0" stroke="#8B5A3C" strokeWidth="3" strokeLinecap="round" />
      <path d="M45 75 Q35 55 45 35 Q55 15 45 8" stroke="#A67C52" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const BEAN_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='none'%3E%3Cg transform='translate(30,25) rotate(-30 20 25)'%3E%3Cpath d='M20 5 C32 5 40 13 43 25 C46 37 42 49 34 55 C26 61 14 61 6 55 C-2 49 -4 37 2 25 C8 13 16 5 20 5 Z' fill='%238B5A3C'/%3E%3Cpath d='M20 10 C23 20 23 30 20 40' stroke='%232A1810' stroke-width='2.5' stroke-linecap='round'/%3E%3Cpath d='M12 14 C9 22 9 30 12 36' stroke='%23C4A88F' stroke-width='1.5' stroke-linecap='round' opacity='0.7'/%3E%3C/g%3E%3Cg transform='translate(105,90) rotate(20 20 25)'%3E%3Cpath d='M20 5 C32 5 40 13 43 25 C46 37 42 49 34 55 C26 61 14 61 6 55 C-2 49 -4 37 2 25 C8 13 16 5 20 5 Z' fill='%236B4423'/%3E%3Cpath d='M20 10 C23 20 23 30 20 40' stroke='%232A1810' stroke-width='2.5' stroke-linecap='round'/%3E%3C/g%3E%3Cg transform='translate(90,15) rotate(45 15 20)'%3E%3Cpath d='M15 3 C24 3 30 9 32 18 C34 27 30 35 24 38 C18 41 10 38 6 30 C2 22 4 12 10 6 C12 4 14 3 15 3 Z' fill='%238B5A3C'/%3E%3Cpath d='M15 7 C17 15 17 23 15 31' stroke='%232A1810' stroke-width='2' stroke-linecap='round'/%3E%3C/g%3E%3Cg transform='translate(10,100) rotate(-15 18 22)'%3E%3Cpath d='M18 4 C28 4 34 10 36 20 C38 30 34 38 28 41 C22 44 12 40 8 30 C4 20 8 8 14 5 C16 4 17 4 18 4 Z' fill='%236B4423'/%3E%3Cpath d='M18 8 C20 16 20 26 18 34' stroke='%232A1810' stroke-width='2' stroke-linecap='round'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

type CoffeePatternProps = {
  variant?: "light" | "dark";
};

export default function CoffeePattern({ variant = "light" }: CoffeePatternProps) {
  const isDark = variant === "dark";

  const patternOpacity = isDark ? "opacity-[0.14]" : "opacity-[0.09]";
  const beanOpacity = isDark
    ? ["opacity-[0.12]", "opacity-[0.10]", "opacity-[0.12]", "opacity-[0.09]", "opacity-[0.08]"]
    : ["opacity-[0.08]", "opacity-[0.07]", "opacity-[0.08]", "opacity-[0.06]", "opacity-[0.05]"];
  const cupOpacity = isDark ? ["opacity-[0.11]", "opacity-[0.09]"] : ["opacity-[0.07]", "opacity-[0.06]"];
  const steamOpacity = isDark
    ? ["opacity-[0.12]", "opacity-[0.10]", "opacity-[0.09]"]
    : ["opacity-[0.08]", "opacity-[0.07]", "opacity-[0.06]"];
  const fadeClass = isDark
    ? "bg-gradient-to-b from-black via-black/40 to-black"
    : "bg-gradient-to-b from-white via-white/40 to-white";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute inset-0 ${patternOpacity}`}
        style={{
          backgroundImage: BEAN_PATTERN,
          backgroundSize: "160px 160px",
        }}
      />

      <CoffeeBeanIcon className={`absolute -left-6 top-16 h-36 w-36 ${beanOpacity[0]}`} />
      <CoffeeBeanIcon className={`absolute right-[12%] top-[20%] h-28 w-28 rotate-[60deg] ${beanOpacity[1]}`} />
      <CoffeeBeanIcon className={`absolute bottom-[18%] left-[18%] h-32 w-32 rotate-[120deg] ${beanOpacity[2]}`} />
      <CoffeeBeanIcon className={`absolute bottom-[10%] right-[8%] h-24 w-24 -rotate-[40deg] ${beanOpacity[3]}`} />
      <CoffeeBeanIcon className={`absolute left-[45%] top-[55%] h-20 w-20 rotate-[200deg] ${beanOpacity[4]}`} />

      <CoffeeCupIcon className={`absolute -left-10 top-[30%] h-52 w-52 ${cupOpacity[0]}`} />
      <CoffeeCupIcon className={`absolute -right-8 bottom-[12%] h-60 w-60 rotate-[15deg] ${cupOpacity[1]}`} />

      <CoffeeSteamIcon className={`absolute left-[6%] top-[22%] h-24 w-24 ${steamOpacity[0]}`} />
      <CoffeeSteamIcon className={`absolute right-[10%] bottom-[38%] h-28 w-28 ${steamOpacity[1]}`} />
      <CoffeeSteamIcon className={`absolute left-1/2 top-6 h-20 w-20 -translate-x-1/2 ${steamOpacity[2]}`} />

      <div className={`absolute inset-0 ${fadeClass}`} />
    </div>
  );
}
