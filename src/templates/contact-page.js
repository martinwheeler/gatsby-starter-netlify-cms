import React from 'react'

export const ContactPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      description
                                    }) => (
  <div>
    {title}
    {heading}
    {image}
    {description}
    <form name="contact" method="POST" netlify>
      <p>
        <label>Your Name: <input type="text" name="name"/></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email"/></label>
      </p>
      <p>
        <label>Message: <textarea name="message"/></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ContactPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
    />
  )
};

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
      }
    }
  }
`;
