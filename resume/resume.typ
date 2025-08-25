#import "format.typ": *

#let name = "Richik Chanda"
#let email = "richikchanda1999@gmail.com"
#let email-display = "richikchanda1999@gmail.com"
#let github = "richikchanda1999"
#let github-display = "richikchanda1999"
#let linkedin = "richikchanda1999"
#let linkedin-display = "in/richikchanda1999"
#let personal-site = "richik.me"
#let website-display = "richik.me"

#show: resume.with(
  top-margin: 0.45in,
  font-size: 9pt,
  personal-info-font-size: 8pt,
  font: "Nunito",
  author-position: left,
  personal-info-position: right,
  author-name: name,
  about-author: "Product-minded full stack engineer",
  email: email,
  email-display: email-display,
  website: personal-site,
  website-display: website-display,
  linkedin-user-id: linkedin,
  linkedin-display: linkedin-display,
  github-username: github,
  github-display: github-display,
)

#let generic_2x2(cols, r1c1, r1c2, r2c1, r2c2) = {
  // sanity checks
  assert.eq(type(cols), array)

  grid(
    columns: cols,
    align(left)[#r1c1 \ #r2c1],
    align(right)[#r1c2 \ #r2c2]
  )
}

#let period_worked(start-date, end-date) = {
  assert.eq(type(start-date), datetime)
  assert(type(end-date) == datetime or type(end-date) == str)

  if type(end-date) == str and end-date == "Present" {
    end-date = datetime.today()
  }

  return [
    #start-date.display("[month repr:short] [year]") --
    #if (
      (end-date.month() == datetime.today().month()) and (end-date.year() == datetime.today().year())
    ) [
      Present
    ] else [
      #end-date.display("[month repr:short] [year]")
    ]
  ]
}

#custom-title("Education")[
  #education-heading(
    "Indian Institute Of Information Technology",
    "Guwahati, India",
    "Bachelor of Technology",
    "Computer Science and Engineering",
    datetime(year: 2018, month: 7, day: 1),
    datetime(year: 2022, month: 5, day: 1),
  )[
    - CGPA: 8.98 (on a scale of 10)
  ]
  #education-heading(
    "Salt Lake School",
    "Kolkata, India",
    "Completed Grad school in 2016 and High school in 2018",
    "",
    none,
    none,
  )[
    - Grad score: 96.6 \%, High school score: 93.75 \%
  ]
]

#custom-title("Experience")[
  #work-heading(
    "Product Engineer",
    "Greyfinch",
    "Remote",
    datetime(year: 2023, month: 11, day: 1),
    datetime(year: 2025, month: 4, day: 1),
  )[
    - Collaborated in a 3-person engineering team to overhaul payment infrastructure using *React and Hasura GraphQL*, ensuring zero downtime during migration and *reducing payment provider charges by over 50%* without breaking existing workflows
    - Designed and delivered a standalone Pay App with *React frontend and GraphQL backend*, implementing custom *Hasura Actions* for secure login and payment processing, impacting more than *20M+ customers* across orthodontic practices
    - Launched the complete Pay App solution from concept to production within 30 days, enabling seamless adoption across 15+ partner clinics and processing *\$10K+ in transactions* through secure payment flows
    - Contributed to the migration of legacy calendar modules to modern architecture with *database optimization*, implementing custom *functions and indexes* to improve appointment fetching performance by 2x while ensuring *100% feature parity* with legacy system
    - Developed responsive UI components using *FullCalendar library and modern CSS*, implementing pixel-perfect designs from Figma mockups and *enhancing user engagement by 25%* across *100+ clinics* for appointment scheduling and monitoring
    - Optimized application-wide search using *GIN indexes* and *pg_trgm extension*, enabling *faster fuzzy search* capabilities across the entire Greyfinch platform and improving search response times by 60%
  ]

  #work-heading(
    "Full stack Blockchain developer",
    "Questbook (YC 21)",
    "Remote",
    datetime(year: 2022, month: 1, day: 1),
    datetime(year: 2023, month: 5, day: 1),
  )[
    - Worked on the decentralised grants tool that was used by more than *20000 users*, and had disbursed around *USD 2M to builders*.
    - Maintained Solidity smart contracts, Next.JS frontend, and sub-graphs that powered the Dapp through *GraphQL* queries.
    - Created the *notification system for the app from scratch*. Designed an *email notification system* leveraging *AWS Simple Email Service*. This system dispatched both event-driven and periodic emails to a roster of recipients, enhancing user engagement and reducing response times on the platform
    - Developed a *Telegram bot* for user action notifications. It comprised a *webhook*, where the Telegram server sent new subscription requests and a cron job that sent out periodic notifications based on a *pub-sub architecture*
    - Integrated Zapier for clients to set up their own data pipelines. For this, created an API endpoint using the *Serverless architecture*, and used periodic polling of this endpoint to get new data
    - *Maintained the custom graph node* that Questbook had for its subgraph on Optimism.
    - This helped me acquire experience with *AWS Lambda* while deploying serverless apps, *AWS Elastic Beanstalk* for graph node management, and *AWS CloudWatch* for debugging
  ]
]


#custom-title("Projects")[
  #project-heading(
    "Chatterbugs Web App - Brainy Bug Resources",
  )[
    - Built *full-stack web application* using *Next.js, TypeScript, and Hasura* to complement physical educational card decks, serving *100+ active users* and generating *\$10K+ in revenue* for the client
    - Implemented *secure authentication system* with *Firebase Authentication* and custom *JWT claims* via Firebase Cloud Functions, enabling user-specific access through unique 6-digit verification codes linked to physical product purchases
    - Integrated *QR code system* allowing instant digital content access from physical cards, reducing user friction by *40%* and improving engagement rates across the platform
    - Led complete *technology stack selection and database design*, choosing optimal solutions for performance and scalability: frontend, database, and API architecture
    - Created *responsive components* with modern CSS and TypeScript, delivering pixel-perfect UI that improved user experience scores by *35%* across desktop and mobile devices
    - Designed *scalable backend architecture* with *GraphQL* API, implementing role-based access control and data validation to ensure secure content delivery
    - Developed high-performance *backend services in Rust* using *Axum framework*, achieving *60% better memory efficiency* compared to Node.js alternatives while running on resource-constrained DigitalOcean infrastructure. Followed *Hexagonal architectural pattern* while doing to increase the modularity of the API.
    - Implemented *Actions and Event Triggers* within Rust server to extend API functionality, enabling real-time notifications and automated business logic processing
    - Automated *CI/CD pipelines* using *GitHub Actions*, implementing database migrations, code testing, and deployment automation that reduced deployment time by *80%* and eliminated manual errors
  ]
]


// #custom-title("Skills")[
//   #skills()[
//     - *Languages:* Java, JavaScript (ES6+), TypeScript, SQL
//     - *Frameworks:* React, Hasura (GraphQL), Apollo (GraphQL)
//     - *Databases:* PostgreSQL, DynamoDB
//     - *DevOps:* Serverless Framework, Docker, Jenkins, CircleCI
//     - *Cloud & Infrastructure:* AWS Lambda, CloudWatch, Elastic Beanstalk
//     - *Tools and Libraries:* FullCalendar, Figma, Git, Zapier
//   ]
// ]
