import React from 'react';

const Quote = (props) => {
  return (
    <div className="quote-container">
      <blockquote className="quote">
        {/* <p>{props.text}</p> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi beatae ab eum aut quasi. Qui impedit, dolor culpa unde aut est vero, explicabo commodi voluptatibus reiciendis non. Deserunt iste modi illum quas facilis, ipsa commodi, odit ex non doloremque in iure similique voluptatum saepe optio aut beatae excepturi vitae sapiente veritatis reiciendis? Cum, deserunt quaerat asperiores id vitae aliquam veritatis. Eligendi excepturi quidem magni, labore ad officia, voluptates esse magnam cumque culpa nobis rem. Enim ut aut aperiam adipisci odit ipsam cumque in deserunt alias necessitatibus! Ullam, amet? Quo non officiis ullam consequatur, nulla illum cupiditate corrupti voluptates quaerat aperiam qui eligendi exercitationem. Perferendis, maxime numquam culpa quasi assumenda quibusdam beatae vero accusantium animi atque, facilis fugit ab neque possimus unde quo totam rerum nihil. Labore in hic debitis perferendis? Nihil accusantium ducimus mollitia distinctio, laborum impedit cum modi facilis earum, atque corrupti magni aperiam ipsam autem aliquam sint ad totam. Deleniti, inventore quod enim tempore repellendus officia itaque tenetur recusandae provident voluptates odit voluptatum laborum, accusamus vitae? Odio similique quis, saepe, aperiam aspernatur veritatis voluptatem quo eos at eaque impedit dignissimos minima quas? Blanditiis labore, fugit ratione impedit quod quas, eaque sit aliquam veritatis non reprehenderit asperiores a.
        </p>
        <footer>{props.author}</footer>
      </blockquote>
    </div>
  );
};

export default Quote;
