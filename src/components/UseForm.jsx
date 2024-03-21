/* eslint-disable react/prop-types */
export function UseForm({ data, updateFieldHandler }) {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome Usuário</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu Nome"
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
        <label htmlFor="email">Email usuário</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu Email"
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
}
