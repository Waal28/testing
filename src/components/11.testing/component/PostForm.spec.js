import { render, screen, act, fireEvent } from "@testing-library/react";
import { PostForm } from "./PostForm";

const mockCreatePost = jest.fn();

jest.mock("../services/post", () => ({
  usePostService: () => {
    return {
      createPosts: mockCreatePost,
    };
  },
}));

describe("src/components/Post Form.jsx", () => {
  describe(`<PostForm/>`, () => {
    it("should render correctly", () => {
      render(<PostForm />);
    });
    screen.getByTestId("post-button");
    it("should show error alert when post field is empty and post-button clicked", () => {
      render(<PostForm />);
    });
    const postButton = screen.getByTestId("post-button");
    act(() => {
      postButton.click();
    });
    const alert = screen.getByTestId("alert-error");
    expect(alert).toBeInTheDocument();
    expect(mockCreatePost).not.toBeCalled();
    it("should hit createPosts function when post field is filled and post-button clicked", () => {
      render(<PostForm />);
      const postButton = screen.getByTestId("post-button");
      const postField = screen.getByPlaceholderText("post");
      act(() => {
        fireEvent.change(postField, { target: { value: "test" } });
      });
      act(() => {
        postButton.click();
      });
      expect(mockCreatePost).toBeCalled();
    });
  });
});
