import { parseISO, format } from "date-fns";
import PropTypes from "prop-types";

DateComponent.propTypes = {
  dateString: PropTypes.string.isRequired,
};

export default function DateComponent({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL yyyy")}</time>;
}
