import * as React from "react";

// interface DescContent {
//   id?: string;
//   sideTitle?: string;
//   subtitle: string;
//   description: string;
//   orientation: string;
// }

export const DescriptionContent = [
  {
    id: "casex",
    sideTitle: "0 - { CASE X }",
    subtitle: "Convenient, fast and powerful.",
    description:
      "CaseX keeps your design sleek and your profile discrete. Solid state drives totally outperforms traditional hard drives, allowing for an external connection that rivals that of any other drive currently on the market. Integrated with a USB Type C interface, you can rely on write speeds up to 10 Gbps",
    orientation: "ltr"
  },
  {
    sideTitle: "1 - { Explore }",
    subtitle: <>Sleek, elegant, specialised.</>,
    description:
      "Designed specifically for MacBook Pro, CaseX provides the affordable solution to protecting your laptop and relieving low hard drive space. Whilst adding no more than 8mm depth to your MacBook Pro.",
    orientation: "rtl"
  },
  {
    subtitle: <>Customisation to your needs, not a bit less</>,
    description: (
      <>
        We know us. and because we know us, we know you. Macbook Pro
        sets the benchmark for crisp design and portability. When looking for
        that extra punch, you don’t want a drive floating around on a cable
        representing the life and death barrier between groundbreaking work and
        lost dreams. Instead, use CaseX. Easy and secure. With zero
        inconvenience.
        <p>For you, by us.</p>
      </>
    ),
    orientation: "ltr"
  }
];

export const StatsBar1=[
  {
    value: <span>Aerospace</span>,
    desc: "ALUMINUM"
  },
  {
    value: <span>Reinforced</span>,
    desc: "POLYCARBONATE"
  },
  
]
export const StatsBar = [
  {
    value: <span>10GB/s</span>,
    desc: "Transfer speeds"
  },
  {
    value: <span>6.5mm</span>,
    desc: "Thickness"
  },
  {
    value: <span>USB-C</span>,
    desc: "Connection"
  },
  {
    value: <span>0</span>,
    desc: "Inconvenience"
  }
];

export const MaterialsBar = [
  {
    value: <span>Aerospace</span>,
    desc: "Aluminium"
  },
  {
    value: <span>24ct</span>,
    desc: "Gold"
  },
  {
    value: <span>Reinforced</span>,
    desc: "Polycarbonate"
  }
];

import secure from "../../../resources/secure.png";
import wholesale from "../../../resources/wholesale.png";
import patent from "../../../resources/patent.png";

export const BusinessBar = [
  {
    value: secure,
    desc: "Secure Payment"
  },
  {
    value: wholesale,
    desc: "Wholesale distribution"
  },
  {
    value: patent,
    desc: "Patent Pending"
  }
];

import SpecImage1 from "../../../resources/smallerLivePhotos/sideView.png";
import SpecImage2 from "../../../resources/smallerLivePhotos/black_black_black.jpg";
import SpecImage3 from "../../../resources/smallerLivePhotos/objects.png";

export const SpecArray = [
  {
    imageSrc: SpecImage1,
    title: <p>our design. buffed and polished. to bespoke standard.</p>,
    desc: (
      <p>
        <span>-------</span> We studied the failings of the current market.
        After many considered days and arduous nights, CaseX grew into what it
        is today. With an ultra-thin polycarbonate shell and an interior
        reinforced with aerospace aluminium, CaseX is magnanimous in strength
        and capacity.
      </p>
    )
  },
  {
    imageSrc: SpecImage3,
    title: <p>interpolated innovation.</p>,
    desc: (
      <p>
        <span>-------</span> All the technology in the world is brought to a
        precipice. Pre-formatted to the universal FAT32, CaseX offers the the
        ability to either store data or to boot into a different operating
        system. The forefronts of innovation reside side by side, on an
        accessible platform.
      </p>
    )
  },
  {
    imageSrc: SpecImage2,
    title: <p>immense power. physical and digital.</p>,
    desc: (
      <p>
        <span>-------</span> We want you to have the Case X experience you
        desire. That’s why we offer customisability, meaning the design and
        aesthetic you envisage becomes our reality. Choose from either 512GB OR
        1TB solid state storage in our range of Case X colours. If you’re
        seeking that special touch, we offer a logo plated with 24ct gold. For
        you, by us.
      </p>
    )
  }
];

import MarketImage1 from "../../../resources/smallerLivePhotos/workshop.jpg";
import MarketImage2 from "../../../resources/smallerLivePhotos/euntra.jpg";
import MarketImage3 from "../../../resources/smallerLivePhotos/Lab2.jpg";

export const MarketArray = [
  {
    imageSrc: MarketImage1,
    title: (
      <p>
        for <b>ENGINEERS</b>
      </p>
    ),
    desc: (
      <p>
        <span>-------</span> From the ashes we rose. Case X was birthed through
        creation. The innovation of engineering. The scripting of full stack
        code. Through forging empires in the modern world — and it all required
        a place, on board, the second you needed it.
      </p>
    )
  },
  {
    imageSrc: MarketImage2,
    title: (
      <p>
        the <b>ENTREPRENEURS</b> and
      </p>
    ),
    desc: (
      <p>
        <span>-------</span> Creators come in all colours. Whether it be in
        design, architecture or photography, there is your kingdom and it’s
        borders are dynamic. For all you software hoarders, design monkeys,
        creative genii and the rest.
      </p>
    )
  },
  {
    imageSrc: MarketImage3,
    title: (
      <p>
        the <b>ARTISTS</b>
      </p>
    ),
    desc: (
      <p>
        <span>-------</span> Media needs mega. Mega space, mega freedom, mega
        variability. Let gigabytes of media with kilobytes of potential not
        cramp up your drive and limit performance. Grab, tag and bag the bits
        you need on the go. Don’t fret over lack of connectivity in those times
        that make or break.
      </p>
    )
  }
];

// import HomepageInfographicImage1 from "src/resources/smallerLivePhotos/infographics/our_design.png";
// import HomepageInfographicImage2 from "src/resources/smallerLivePhotos/infographics/interpolated_innovation.png";
// import HomepageInfographicImage3 from "src/resources/smallerLivePhotos/infographics/immense_power.png";
// import HomepageInfographicImage4 from "src/resources/smallerLivePhotos/infographics/for_engineers.png";
// import HomepageInfographicImage5 from "src/resources/smallerLivePhotos/infographics/entrepreneurs.png";
// import HomepageInfographicImage6 from "src/resources/smallerLivePhotos/infographics/artists.png";
import HomepageInfographicImage1 from "src/resources/homepage_sections/our_design.jpg";
import HomepageInfographicImage2 from "src/resources/homepage_sections/interpolated_innovation.jpg";
import HomepageInfographicImage3 from "src/resources/homepage_sections/immense_power.jpg";
import HomepageInfographicImage4 from "src/resources/homepage_sections/engineers.jpg";
import HomepageInfographicImage5 from "src/resources/homepage_sections/entrepreneurs.jpg";
import HomepageInfographicImage6 from "src/resources/homepage_sections/artists.jpg";
import { colors } from "src/theme";

interface HomepageInfographicInterface {
  key: string;
  imageSrc: string;
  title: string;
  desc: string;
  textColour: string;
  backgroundColour: string;
  backgroundColourBackup: string;
  orientation: "wide" | "tall";
}

export const HomepageInfographics: HomepageInfographicInterface[] = [
  {
    key: "our design",
    imageSrc: HomepageInfographicImage1,
    title: "our design. buffed and polished. to bespoke standard.",
    desc:
      "We studied the failings of the current market. After many considered days and arduous nights, CaseX grew into what it is today. With an ultra-thin polycarbonate shell and an interior reinforced with aerospace aluminium, CaseX is magnanimous in strength and capacity.",
    textColour: colors.background_dark,
    backgroundColour: "rgb(255, 255, 255, 0.8)",
    backgroundColourBackup: "#FFFFFF",
    orientation: "wide"
  },
  {
    key: "interpolated innovation",
    imageSrc: HomepageInfographicImage2,
    title: "interpolated innovation",
    desc:
      "All the technology in the world is brought to a precipice. Pre-formatted to the universal FAT32, CaseX offers the the ability to either store data or to boot into a different operating system. The forefronts of innovation reside side by side, on an accessible platform.",
    textColour: colors.background_light,
    backgroundColour: "rgb(0, 0, 0, 0.8)",
    backgroundColourBackup: "#000000",
    orientation: "tall"
  },
  {
    key: "immense power",
    imageSrc: HomepageInfographicImage3,
    title: "immense power. physical and digital.",
    desc:
      "We want you to have the Case X experience you desire. That’s why we offer customisability, meaning the design and aesthetic you envisage becomes our reality. Choose from either 512GB OR 1TB solid state storage in our range of Case X colours. If you’re seeking that special touch, we offer a logo plated with 24ct gold. For you, by us.",
    textColour: colors.background_dark,
    backgroundColour: "rgb(255, 255, 255, 0.8)",
    backgroundColourBackup: "#FFFFFF",
    orientation: "tall"
  },
  {
    key: "engineers",
    imageSrc: HomepageInfographicImage4,
    title: "for ENGINEERS",
    desc:
      "From the ashes we rose. Case X was birthed through creation. The innovation of engineering. The scripting of full stack code. Through forging empires in the modern world — and it all required a place, on board, the second you needed it.",
    textColour: colors.background_light,
    backgroundColour: "rgb(0, 0, 0, 0.8)",
    backgroundColourBackup: "#000000",
    orientation: "wide"
  },
  {
    key: "entrepreneurs",
    imageSrc: HomepageInfographicImage5,
    title: "for ENTREPRENEURS",
    desc:
      "Creators come in all colours. Whether it be in design, architecture or photography, there is your kingdom and it’s borders are dynamic. This is for all you software hoarders, design monkeys, creative genii as well as everything in between.",
    textColour: colors.background_dark,
    backgroundColour: "rgb(255, 255, 255, 0.8)",
    backgroundColourBackup: "#FFFFFF",
    orientation: "tall"
  },
  {
    key: "artists",
    imageSrc: HomepageInfographicImage6,
    title: "For ARTISTS",
    desc:
      "Media needs mega. Mega space, mega freedom, mega variability. Let gigabytes of media with kilobytes of potential not cramp up your drive and limit performance. Grab, tag and bag the bits you need on the go. Don’t fret over lack of connectivity in those times that make or break.",
    textColour: colors.background_light,
    backgroundColour: "rgb(0, 0, 0, 0.8)",
    backgroundColourBackup: "#000000",
    orientation: "wide"
  }
];
