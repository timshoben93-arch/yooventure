import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/data/services";
import rwaImg from "@/assets/services/rwa-tokenization.jpg";
import auditsImg from "@/assets/services/audits.jpg";
import layersImg from "@/assets/services/layers.jpg";
import complianceImg from "@/assets/services/compliance.jpg";
import liquidityImg from "@/assets/services/liquidity.jpg";
import aiImg from "@/assets/services/ai-analytics.jpg";
import ecommerceImg from "@/assets/services/ecommerce-development.jpg";
import telegramImg from "@/assets/services/telegram-mini-apps.jpg";
import gameImg from "@/assets/services/game-development.jpg";
import iotImg from "@/assets/services/iot-embedded-development.jpg";

const images: Partial<Record<string, string>> = {
  "rwa-tokenization": rwaImg,
  "blockchain-development": layersImg,
  "ai-ml-development": aiImg,
  "mobile-app-development": complianceImg,
  "web-cms-development": liquidityImg,
  "ecommerce-development": ecommerceImg,
  "telegram-mini-apps": telegramImg,
  "game-development": gameImg,
  "iot-embedded-development": iotImg,
  "devops-services": auditsImg,
};

export const Services = () => {
  return (
    <section id="solutions" className="scroll-mt-24 border-b border-border py-20 md:py-28">
      <div className="container @container">
        <SectionHeading
          size="page"
          eyebrow="Services"
          title={
            <>
              Engineering for assets that already exist <span className="text-gradient">in the real world</span>
            </>
          }
          description="Every service we sell has a page. The list below is that catalog — issuance work and the product engineering around it."
        />

        <ul className="mt-4 divide-y divide-border border-t border-border">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const image = images[service.slug];
            return (
              <li key={service.slug}>
                <Reveal delayMs={i * 40}>
                  <Link
                    to={`/services/${service.slug}`}
                    className={
                      image
                        ? "grid gap-6 py-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 md:py-10"
                        : "block py-8 md:py-10"
                    }
                  >
                    {image ? (
                      <div className="relative hidden h-20 w-32 overflow-hidden border border-border sm:block">
                        <img src={image} alt="" width={256} height={160} loading="lazy" className="h-full w-full object-cover" />
                      </div>
                    ) : null}
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                        <h3 className="font-display text-xl font-semibold tracking-tight">{service.short}</h3>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{service.tagline}</p>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
