import React from "react";
const Startpage = (props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen startpageback font-secondary ">
      <div className="md:text-9xl text-8xl text-primary font-title md:-mt-40">Quizin</div>
      <div className="md:text-xl text-lg text-primary mt-4 font-title font-bold">
        Your quiz buddy
      </div>
      <div
        className="md:text-2xl text-xl text-background font-bold bg-primary rounded-md py-3 px-6 mt-12  hover:scale-110 hover:bg-primaryd transition-all  duration-300 ease-in-out"
        onClick={props.togglepage}
      >
        START
      </div>
      <form className="fixed bottom-0 h-80 md:left-0 self-center m-10 p-5 bg-background md:translate-y-72 translate-y-72 hover:translate-y-14 md:hover:translate-y-32 rounded-lg flex flex-col gap-6 text-primary transition-all ease-in-out duration-300 border-4 border-primary">
        <div className="text-center font-bold text-2xl">Settings</div>
        <div className="flex items-center md:flex-row flex-col">
          <div className="w-28 font-semibold md:text-start text-center mb-2 md:mb-0">Category</div>
          <select name="category" onChange={(event)=>props.handlesettings(event)} value={props.settings.category} className="rounded-lg [&_option]:bg-background bg-background border-none outline-none">
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals & Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
          </select>
        </div>
        <div className="flex items-center md:flex-row flex-col">
          <div className="w-28 font-semibold md:text-start text-center mb-2 md:mb-0">Questions</div>
          <div className="flex items-center">
          <div id="rangeValue" className="w-4">{props.settings.noofques}</div>
          <input
            onChange={(event)=>props.handlesettings(event)}
            type="range"
            min="1"
            max="20"
            id="rangeid"
            defaultValue={props.settings.noofques}
            name="noofques"
            className="md:w-72 ml-3  w-64 h-2 bg-primaryl rounded-lg appearance-none cursor-pointer accent-primaryd"
          />
          </div>
        </div>
        <div className="flex items-center md:flex-row flex-col ">
          <div className="w-28 font-semibold md:text-start text-center mb-2 md:mb-0">Difficulty</div>
          <div className="flex flex-row gap-8">
            <div className="flex items-center mr-4">
              <input
                onChange={(event)=>props.handlesettings(event)}
                id="radio1"
                type="radio"
                checked={props.settings.difficulty=="easy"}
                value="easy"
                name="difficulty"
                className="w-4 h-4 accent-primary"
              />
              <label
                htmlFor="radio1"
                className="ml-2 text-primary"
              >
                Easy
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input
                onChange={(event)=>props.handlesettings(event)}
                id="radio2"
                type="radio"
                checked={props.settings.difficulty=="medium"}
                value="medium"
                name="difficulty"
                className="w-4 h-4 accent-primary"
              />
              <label
                htmlFor="radio2"
                className="ml-2 text-primary"
              >
                Medium
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input
                onChange={(event)=>props.handlesettings(event)}
                id="radio3"
                type="radio"
                value="hard"
                checked={props.settings.difficulty=="hard"}
                name="difficulty"
                className="w-4 h-4 accent-primary"
              />
              <label
                htmlFor="radio3"
                className="ml-2 text-primary"
              >
                Hard
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Startpage;
