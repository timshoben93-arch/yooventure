import { BookOpen, Eye, Cpu, Network, Boxes, Flag, type LucideIcon } from "lucide-react";

export type DocSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type DocChapter = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  intro: string;
  sections: DocSection[];
};

export const DOCS: DocChapter[] = [
  {
    slug: "challenges",
    number: "01",
    title: "Challenges",
    tagline: "Understanding the core problems in decentralized real estate infrastructure.",
    icon: BookOpen,
    intro:
      "This chapter is a design note, not a description of a network Yooventure operates. Peer-to-peer networks move data well. A regulated ownership transfer also has to be final, identifiable, and consistent with the offering.",
    sections: [
      {
        heading: "1.1 Limitations of P2P Networks",
        body: [
          "The traditional peer-to-peer model was designed for data distribution, not for custody or for a transfer that counsel can reconcile with an offering document. Distributed hash table lookup cost grows like O(log N). That cost is acceptable for finding a file. It is not what makes a financial transfer valid. Settlement fails when identity, jurisdiction, and finality are missing, not because a lookup took a logarithmic number of hops.",
        ],
        bullets: [
          "In unstructured gossip, the time for a message to reach most nodes typically grows with the logarithm of the node count, and it gets worse when the graph is poorly connected.",
          "Sybil attacks remain a threat unless identity or stake limits how many voices one operator can cast.",
          "NAT traversal often fails for consumer nodes, so some machines can dial out but cannot accept inbound connections. That shrinks the set of useful relays. The share of nodes affected depends on the network; this paper does not state a percentage.",
          "Bandwidth asymmetry between node types creates bottlenecks at aggregation points.",
        ],
      },
      {
        heading: "1.2 Resource Utilization",
        body: [
          "Proof-of-work systems buy security with energy that is unrelated to useful network work. This paper sketches an alternative contribution rule, Proof-of-Relay. It would reward nodes for forwarding packets, keeping an uptime commitment, and answering routing queries. It is a design proposal for client systems. It is not a live Yooventure chain.",
        ],
      },
      {
        heading: "1.3 Net Neutrality & Fragmentation",
        body: [
          "Modern internet infrastructure is increasingly fragmented along jurisdictional and commercial lines, threatening the open access principles that made decentralized networks viable.",
        ],
      },
    ],
  },
  {
    slug: "vision",
    number: "02",
    title: "Vision",
    tagline: "Objectives, architecture pillars, and the developer ecosystem.",
    icon: Eye,
    intro:
      "The sections below are design objectives for work we do with issuers. They are not a claim that Yooventure runs a public protocol or has issued a token.",
    sections: [
      {
        heading: "2.1 Objectives",
        body: [
          "Four objectives guide the design. None of them is a promise that a network with these properties is operating today.",
        ],
        bullets: [
          "Record institutional real-estate cash flows on-chain without skipping the offering documents.",
          "Keep transfer, identity, and custody rules aligned with the jurisdiction of the asset.",
          "Treat post-issuance work — NAV, coupons, and redemptions — as part of the system, not a later project.",
          "Measure who can actually halt or rewrite the system, instead of assuming decentralization from the logo.",
        ],
      },
      {
        heading: "2.2 Three pillars",
        body: [
          "The design has three pillars. Consensus is how nodes agree on an update. Execution is how a transfer and its compliance checks run. Networking, the third pillar, is how data moves between those nodes: geographic-aware routing, service levels, and identity that resists Sybil attacks. Networking is specified with the other two, not added after the contracts are finished.",
        ],
      },
      {
        heading: "2.3 Elementary Components",
        bullets: [
          "Governance — A mechanism, on-chain or off-chain, for upgrades, fees, and which assets are listed. A DAO is one option, and only where the offering allows it.",
          "Compliance layer — KYC and AML checks and jurisdictional transfer limits enforced in the contracts.",
          "SPV backing — If a token represents real estate, the design calls for a special-purpose vehicle that holds that property, with backing and transfer limits written in the offering. This paper does not describe a live token, and it is not an offer of securities.",
        ],
        body: [],
      },
      {
        heading: "2.4 Integrator toolkit",
        body: [
          "A client issuance would ship with interfaces integrators can call. That toolkit is part of the design. Yooventure does not publish it as a public network SDK today.",
        ],
        bullets: [
          "JavaScript/TypeScript SDK — Client libraries and React hooks for the issuance APIs.",
          "HTTP gateway — An HTTP interface described with OpenAPI 3.0, for systems that are not on-chain.",
          "Event streams — WebSocket subscriptions for prices, yields, and governance events when the issuance has them.",
          "Query index — A GraphQL index for portfolio questions, fed by the chain the issuance actually uses.",
        ],
      },
    ],
  },
  {
    slug: "technology-foundations",
    number: "03",
    title: "Technology Foundations",
    tagline: "Cellular Automata theory and its application to distributed consensus.",
    icon: Cpu,
    intro:
      "Cellular Automata (CA) provide a mathematically elegant framework for emergent global consensus from purely local interactions.",
    sections: [
      {
        heading: "3.1 Cellular Automata",
        body: [
          "A CA consists of a regular grid of cells, each in a finite state, evolving in discrete time according to a fixed rule based on neighboring states. Despite local simplicity, CAs produce rich global behavior.",
        ],
      },
      {
        heading: "3.2 Rules as Formulas",
        body: [
          "Each node holds a state S(i, t) in {+1, −1}. Let N(i, t) be the randomly chosen neighbors of node i. The update is a majority vote:",
          "S(i, t+1) = sign( S(i, t) + Σ S(j, t) ) for j in N(i, t).",
          "sign is +1 or −1. If the sum inside is 0, the node keeps S(i, t). The same rule is restated in Chapter 5. It is a design rule. We do not claim that every random regular graph reaches unanimous agreement in O(log N) rounds.",
        ],
      },
    ],
  },
  {
    slug: "new-kind-of-network",
    number: "04",
    title: "New Kind of Network",
    tagline: "Architecture, topology, routing, and decentralization mechanisms.",
    icon: Network,
    intro:
      "This chapter proposes a relay network that would reward useful work. It is a sketch for how an issuance network could be built, not a map of a network now online.",
    sections: [
      {
        heading: "4.1 Next Generation Decentralized Network",
        body: [
          "Geographic-aware node selection, service-level relays, and identity-bound routing are the proposed network layer.",
        ],
      },
      {
        heading: "4.2 Proof-of-Relay",
        body: [
          "Proof-of-Relay would score nodes for forwarding packets, meeting an uptime commitment, and answering routing queries. The point is to pay for useful work. It is not proof-of-work mining under another name, and it is not running today.",
        ],
      },
      {
        heading: "4.3 Network Topology and Routing",
        body: [
          "Self-organization: Nodes form clusters based on shared routing responsibilities, with no central coordinator.",
          "Self-evolution: Routing strategies adapt to observed performance via reputation decay, creating evolutionary pressure toward high-performance routing.",
        ],
      },
      {
        heading: "4.4 Efficient Decentralization",
        body: [
          "Decentralization here means the Nakamoto coefficient: the smallest set of operators who, together, could halt or rewrite the system. A design target of at least 100 across block production, relays, oracle feeds, and governance votes is a goal for a deployment. It is not a measurement of a live Yooventure network.",
        ],
      },
    ],
  },
  {
    slug: "consensus",
    number: "05",
    title: "Cellular Automata Powered Consensus",
    tagline: "The update rule proposed for agreement, and what it does not prove.",
    icon: Boxes,
    intro:
      "Mainstream consensus mechanisms (PoW, PoS, BFT) each carry trade-offs between energy use, finality, and decentralization. CA-powered consensus offers a different operating point.",
    sections: [
      {
        heading: "5.1 Mainstream Consensus",
        body: [
          "PoW prioritizes security at high energy cost. PoS reduces energy but concentrates power among large stakeholders. Classical BFT scales poorly with validator count.",
        ],
      },
      {
        heading: "5.2 Cellular Automata Powered Consensus",
        body: [
          "Use the same rule as Chapter 3. States are in {+1, −1}. S(i, t+1) = sign( S(i, t) + Σ S(j, t) ) over the neighbors j of i. A sum of 0 leaves the previous state in place. Fast agreement on some graphs is the hope, not a theorem. This paper does not claim O(log N) consensus, with probability approaching 1, for every random graph of degree 3 or more.",
        ],
      },
      {
        heading: "5.3 Proof of Relay",
        body: [
          "Validator weight is derived from verified relay contributions, randomized neighbor sets via VRF, and stake — combining economic skin-in-the-game with measurable network utility.",
        ],
      },
      {
        heading: "5.4 Potential Attacks",
        body: [
          "Reshuffling neighbors each epoch, for example with a verifiable random function, makes an eclipse or Sybil attack harder because an attacker cannot keep the same victims next door forever. It does not cancel stake. If validator weight includes stake, someone who holds a majority of that weight can still dominate. Hashrate is the wrong unit: this design does not use proof-of-work mining.",
        ],
      },
    ],
  },
  {
    slug: "conclusions",
    number: "06",
    title: "Conclusions",
    tagline: "Bridging physical property value with decentralized finance infrastructure.",
    icon: Flag,
    intro:
      "The notes above describe a design a studio could implement with an issuer: fractional real-estate records, a special-purpose vehicle where the offering requires one, and a proposed consensus rule. They do not launch a protocol, and they do not claim to be the first design of this kind.",
    sections: [
      {
        heading: "Outlook",
        body: [
          "The useful next step is a written issuance plan: which contracts, which identity checks, which custodian, and which chain. A Nakamoto-coefficient target belongs in that plan as a goal, not as a statistic from a network that is already online.",
        ],
      },
    ],
  },
];
