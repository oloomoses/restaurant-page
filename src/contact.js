function form() {
  const form = document.createElement('form');
  const child = `
  <label class = 'label'>Enter your name</label><br>
  <input type = 'text' class = 'f-name f' /><br>
  <label class = 'label'>Email</label><br>
  <input type = 'email' class = 'f-email f' /><br>

  <label class = 'label'>Message</label><br>
  <textarea class = 'textarea'></textarea>

  <button type = 'submit' class = 'submit'>Submit</submit>
  `;

  form.innerHTML = child;
  return form;
}

const contact = () => {
  const content = document.querySelector('.content');
  const div = document.createElement('div');
  div.classList.add('form-area');
  div.appendChild(form());

  const h2 = document.createElement('h2');
  h2.classList.add('sub-header');
  h2.innerHTML = 'Leave a Message';

  content.appendChild(h2);

  content.appendChild(div);
  return content;
};

export { contact as default };