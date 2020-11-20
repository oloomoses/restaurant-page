function form(){
  const form = document.createElement('form');
  const child = `
  <label>Enter your name</label>
  <input type = 'text' class = 'f-name' /><br>
  <label>Email</label>
  <input type = 'email' class = 'f-email' /><br>

  <label>Message</label>
  <textarea class = 'textarea'></textarea>
  `

  form.innerHTML = child;
  return form
}

export const contact = () => {
  const content = document.querySelector('.content');
  const div = document.createElement('div');
  div.classList.add('form-area');
  div.appendChild(form());

  content.appendChild(div);
  return content;

}