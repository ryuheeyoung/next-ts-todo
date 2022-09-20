import { fall, spring, summer, winter } from "constants/theme";

const season = {
  winter: winter,
  spring: spring,
  summer: summer,
  fall: fall,
};

const getSeason = () => {
  const month = new Date().getMonth();
  switch (true) {
    case month < 2:
      return winter;
    case month < 5:
      return spring;
    case month < 7:
      return summer;
    case month < 10:
      return fall;
    default:
      return winter;
  }
};

export { season, getSeason };
