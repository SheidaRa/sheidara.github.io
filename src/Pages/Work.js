import WorkCard from "../Components/WorkCard";

const Work = () => {

  return (
    <div className="col-lg-10 offset-lg-1">
      <div className="row section-wrapper">

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Intern"}
            place={"Gaston LLC, AZ"}
            date={"May 2025 - Present"}
            image="https://img.freepik.com/vecteurs-libre/femme-affaires-multitache-dessinee-main-illustree_23-2148818039.jpg?semt=ais_hybrid&w=740&q=80"
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Brain-Computer Interaction (BCI) Intern"}
            place={"Blackrock Neurotech, UT"}
            date={"January 2025 - May 2025"}
            image="https://cdn.prod.website-files.com/601eb8df9b255fadfdab90e5/61a790b92e49a64260054a98_Group%20329.png"
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Artificial Intelligence Research Assistant"}
            place={"Macalester College, MN"}
            date={"May 2024 – Janurary 2025"}
            image={
              "https://img.freepik.com/free-photo/futuristic-ai-technology-microchip-advanced-innovation-digital-remix_53876-124694.jpg?t=st=1733590786~exp=1733594386~hmac=727e81dfad6841c3554f569e88a809862d61bcc82a0121614776a2ded40fb7c0&w=1380"
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Human-Computer Interaction Research Assistant"}
            place={"Macalester College, MN"}
            date={"February 2024 – May 2024"}
            image={
              "https://www.computersciencedegreehub.com/wp-content/uploads/2023/07/shutterstock_2284126663-scaled.jpg"
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Data Analyst, Software Developer, UX Designer"}
            place={"Easy EMDR. MN"}
            date={"June 2023 – August 2023"}
            image={"/images/places/easyemdr.png"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Data Analyst, Software Developer and UX Designer Intern"}
            place={"GogyUp Inc. MN "}
            date={"June 2022 - August 2022"}
            image={"images/places/gogyup.png"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={
              "Teaching Assistant for Algorithm Design & Analysis & Python"
            }
            place={"Macalester College, MN"}
            date={"January 2023 – May 2023"}
            image={"images/schools/Mac.jpg"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Digital Resources Center Lab Assistant"}
            place={"Macalester College, MN"}
            date={"August 2020 - January 2024"}
            image={"images/places/drc.jpg"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={
              "Google Women Techmakers Ambassador & Student Developer Club Leader"
            }
            place={"Macalester College, MN"}
            date={"July 2022 – Present"}
            image={"images/places/google.png"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Social Media Manager and Committee Member"}
            place={"United World College Iran National Committee, Remote"}
            date={"December 2020 – Present"}
            image={"images/places/uwc.png"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Resident Assistant"}
            place={"Macalester College, MN"}
            date={"January 2022 – May 23"}
            image={"images/places/dorm.jpg"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Student Government Diversity and Inclusion Officer"}
            place={"Macalester College, MN"}
            date={" November 2021 - May 2022"}
            image={"images/places/mcsg.png"}
          />
        </div>
        <div className="col-lg-5 col-md-6"></div>
      </div>
    </div>
  );
};

export default Work;
