const EnquiryList = () => {
    return (
        <div className="p-4 gap-6  bg-gray-100 rounded-lg">
          {/* You can put info, image, text here */}
          <h2 className="text-2xl font-semibold mb-4">User List</h2>

          <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table class="w-full text-sm text-left rtl:text-right text-body">
              <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
                <tr>
                  <th scope="col" class="px-6 py-3 font-medium">
                    Sr No.
                  </th>
                  <th scope="col" class="px-6 py-3 font-medium">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3 font-medium">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3 font-medium">
                    Phone
                  </th>
                  <th scope="col" class="px-6 py-3 font-medium">
                    Message
                  </th>
                  
                  <th scope="col" class="px-6 py-3 font-medium">
                    Edit
                  </th>
                  <th scope="col" class="px-6 py-3 font-medium">
                   Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    1
                  </th>
                  <td class="px-6 py-4">Pooja</td>
                  <td class="px-6 py-4">Pooja@gmail.com</td>
                  <td class="px-6 py-4">9876543210</td>
                  <td class="px-6 py-4">
                    I want to know more about your products
                  </td>
                  
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Delete</a>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
    )
}
export default EnquiryList