import "@testing-library/jest-dom";

import { configure as enzymeConfigure } from "enzyme";
import EnzymeAdapterForReact17 from "@wojtekmaj/enzyme-adapter-react-17";

enzymeConfigure({ adapter: new EnzymeAdapterForReact17() });
