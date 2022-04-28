import "./App.css";
import LogoBild from "./components/LogoBild";


function DarknBright() {
  return (
    <div id="dark-bright">
      <div id="dark-side">
        <LogoBild/>
        <p>
          <b>ABOUT ME</b> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error
          distinctio architecto illum eligendi dignissimos soluta neque
          praesentium omnis ad aliquid officia numquam obcaecati aspernatur
          veritatis, molestiae dicta. Doloremque, in.
        </p>
        <hr />
        <p>
          <b>WEBSITE & SOZIAL LINKS </b>
          <br />
          Facebook: <br />
          facebook.com/robinson <br />
          Twitter: <br />
          Twitter.com/robinson
        </p>
        <hr />
        <p>
          <b>REFERENZES</b> <br />
          <b>MR:MICHAEL BOBINSON</b> <br />
          Graphic and Web Designer <br />
          T:+1212-9843-3456
          <br />
          E:info@mailname.com
        </p>
        <hr />
        <p>
          <b>LANGUAGES</b> <br />
          <li>Englisch</li>
          <li>Deutsch</li>
        </p>
        <hr />
        <p>
          <b>ADDITIONAL DETAILS</b> <br />
          Driving License
          <br />
          Full
        </p>
      </div>
      <div id="bright-side">
        <p>
          <b>MICHELE ROBINSON</b>
          <br />
          GRAPHIC DESINGER
        </p>
      </div>
    </div>
  );
}

export default DarknBright;
