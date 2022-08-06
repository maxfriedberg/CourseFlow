import courseDetailsBodyTestModel from "./courseDetailsBody";
import courseDetailsFooterTestModel from "./courseDetailsFooter";
import courseDetailsHeaderTestModel from "./courseDetailsHeader";

const courseDetailsTestModel = (courseObj) => () => {
    describe('Header', courseDetailsHeaderTestModel(courseObj))
    describe('Body', courseDetailsBodyTestModel(courseObj))
    describe('Footer', courseDetailsFooterTestModel())
}

export default courseDetailsTestModel