export default function loginPage(){
  document.title='Login page'
  return (
    <div className="mt-20 text-center ">
      <div className="text-3xl font-semibold text-gray-600 m-5"> Sign in to Apple Store </div>
      <input type="email" placeholder="EMAIL" className="border-2 border-gray-500 w-2/5 rounded-lg p-2 h-12"/>
      <br/>
      <input type="password" placeholder="PASSWORD" className="border-2 border-gray-500 w-2/5 rounded-lg p-2 h-12"   />
      
    </div>
  );
}
