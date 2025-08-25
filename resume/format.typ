#import "@preview/fontawesome:0.5.0": fa-envelope, fa-github, fa-globe, fa-linkedin

#let resume(
  paper: "a4",
  top-margin: 0.4in,
  bottom-margin: 0.2in,
  left-margin: 0.3in,
  right-margin: 0.3in,
  font: "New Computer Modern",
  font-size: 11pt,
  personal-info-font-size: 10.5pt,
  author-name: "",
  about-author: "",
  author-position: center,
  personal-info-position: center,
  phone: "",
  location: "",
  email: "",
  email-display: "",
  website: "",
  website-display: "",
  linkedin-user-id: "",
  linkedin-display: "",
  github-username: "",
  github-display: "",
  body,
) = {
  set document(
    title: "Résumé | " + author-name,
    author: author-name,
    keywords: "cv",
    date: none,
  )

  set page(
    paper: "a4",
    margin: (
      top: top-margin,
      bottom: bottom-margin,
      left: left-margin,
      right: right-margin,
    ),
  )

  set text(
    font: font,
    size: font-size,
    lang: "en",
    ligatures: false,
  )

  show heading.where(
    level: 3,
  ): it => block(width: 100%)[
    #set text(font-size + 2pt, weight: "regular")
    #smallcaps(it.body)
    #v(-1em)
    #line(length: 100%, stroke: stroke(thickness: 0.4pt))
    #v(-0.2em)
  ]

  let contact_item(value, display-text: "", link-type: "", prefix: "") = {
    if value != "" {
      let display = if display-text != "" { display-text } else { prefix + value }
      if link-type != "" {
        underline(offset: 0.3em)[#link(link-type + value)[#display]]
      } else {
        display
      }
    }
  }

  grid(
    columns: (1fr, 1fr),
    align: (left, right),
    
    // Left side: Author info
    stack(
      text(font-size + 2pt, weight: "semibold")[#author-name],
      v(0.5em),
      text(font-size)[#about-author],
    ),
    
    // Right side: Contact grid
    text(personal-info-font-size)[
      #{
        grid(
          columns: (1fr, 1fr),
          row-gutter: 0.6em,
          column-gutter: 1.5em,
          align: (left, left),

          [#fa-envelope() #h(0.3em) #contact_item(email, display-text: email-display, link-type: "mailto:")],
          [#fa-globe() #h(0.3em) #contact_item(website, display-text: website-display, link-type: "https://")],

          [#fa-github() #h(0.3em) #contact_item(github-username, display-text: github-display, link-type: "https://github.com/", prefix: "github.com/")],
          [#fa-linkedin() #h(0.3em) #contact_item(
              linkedin-user-id,
              display-text: linkedin-display,
              link-type: "https://linkedin.com/in/",
              prefix: "linkedin.com/in/",
            )],
        )
      }
    ]
  )

  body
}

// ---
// Custom functions

#let generic_1x2(r1c1, r1c2) = {
  grid(
    columns: (1fr, 1fr),
    align(left)[#r1c1], align(right)[#r1c2],
  )
}

#let generic_2x2(cols, r1c1, r1c2, r2c1, r2c2) = {
  // sanity checks
  assert.eq(type(cols), array)

  grid(
    columns: cols,
    align(left)[#r1c1 \ #r2c1],
    align(right)[#r1c2 \ #r2c2]
  )
}

#let custom-title(title, spacing-between: -0.5em, body) = {
  // Title row with leader rule to the right edge of the current text area
  block(width: 100%)[
    #grid(
      columns: (auto, 1fr),
      column-gutter: 0.2em,
      align: (top, center),
    )[
      // Keep the title on one line and prevent it from taking the whole row
      #v(0.6em)
      #box[
        #text(weight: "bold")[#title]
      ]
      #v(-0.6em)
      // The right “line” filling all remaining width
      #rect(width: 100%, height: 0.6pt, fill: gray)
    ]
  ]

  // Body below
  body
  v(spacing-between)
}


// Custom list to be used inside custom-title section.
#let skills(body) = {
  if body != [] {
    set par(leading: 0.6em)
    set list(
      body-indent: 0.1em,
      indent: 0em,
      marker: [],
    )
    body
  }
}

// Converts datetime format into readable period.
#let period_worked(start-date, end-date) = {
  // sanity checks
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

// Pretty self-explanatory.
#let work-heading(title, company, location, start-date, end-date, body) = {
  // sanity checks
  assert.eq(type(start-date), datetime)
  assert(type(end-date) == datetime or type(end-date) == str)

  grid(
    columns: (auto, 1fr, auto),
    align: (left, left, right),
  )[
    *#title* \@ #emph[#company]
    #h(1fr),
    *#period_worked(start-date, end-date)* \(#emph[#location])\
  ]

  if body != [] {
    v(-0.4em)
    set par(leading: 0.6em)
    set list(indent: 0.5em)
    body
  }
}

#let project-heading(name, stack: "", project-url: "", body) = {
  if project-url.len() != 0 { link(project-url)[*#name*] } else {
    [*#name*]
  }
  if stack != "" {
    [
      #show "|": sep => {
        h(0.3em)
        [|]
        h(0.3em)
      }
      |*#stack*
    ]
  }
  v(-0.2em)
  if body != [] {
    v(-0.4em)
    set par(leading: 0.6em)
    set list(indent: 0.5em)
    body
  }
}

// Pretty self-explanatory.
#let education-heading(institution, location, degree, major, start-date, end-date, body) = {
  let dates = none

  if type(start-date) == datetime {
    dates = period_worked(start-date, end-date)
  }

  generic_2x2(
    (70%, 30%),
    [*#institution*],
    [*#location*],
    [#degree, #major],
    dates,
  )
  v(-0.2em)
  if body != [] {
    v(-0.4em)
    set par(leading: 0.6em)
    set list(indent: 0.5em)
    body
  }
}

// #let work_highlights(..points)  = {
//   v(-0.4em)
//   list(
//     indent: 0.4em,
//     ..((..l) => {
//       let new_array = ()
//       for item in l.pos() {
//         new_array.push(par(leading: 0.55em)[#item])
//       }
//       return new_array
//     })(..points)
//   )
// }
