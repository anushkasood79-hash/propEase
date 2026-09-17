import { Link } from "react-router-dom";
import { useState } from "react";

function NewMaintenance() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "medium",
    description: "",
    image: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing maintenance requests
    const existingRequests =
      JSON.parse(localStorage.getItem("maintenanceRequests")) || [];

    // Create new request
    const newRequest = {
      id: `MR-${Date.now()}`,
      title: formData.title,
      category: formData.category,
      priority: formData.priority,
      description: formData.description,
      image: formData.image ? formData.image.name : "",
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    // Add new request
    const updatedRequests = [...existingRequests, newRequest];

    // Save to localStorage
    localStorage.setItem(
      "maintenanceRequests",
      JSON.stringify(updatedRequests)
    );

    console.log("New Maintenance Request:", newRequest);
    console.log("Saved Maintenance Requests:", updatedRequests);

    // Show success message
    setSubmitted(true);

    // Clear form
    setFormData({
      title: "",
      category: "",
      priority: "medium",
      description: "",
      image: null,
    });

    // Reset file input visually
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/tenant/dashboard" className="text-2xl font-bold">
            Prop<span className="text-blue-600">Ease</span>
          </Link>

          <Link
            to="/tenant/maintenance"
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Maintenance
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">
            New Maintenance Request
          </h1>

          <p className="mt-2 text-slate-500">
            Tell us about the issue you're experiencing.
          </p>

          {submitted && (
            <div className="mt-6 rounded-lg bg-green-100 p-4 font-medium text-green-700">
              Maintenance request submitted successfully! ✅
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Issue Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Water leakage in bathroom"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
              >
                <option value="">Select category</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="appliance">Appliance</option>
                <option value="ac">AC / Heating</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                placeholder="Describe the issue in detail..."
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Upload Image
              </label>

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Submit Request
              </button>

              <Link
                to="/tenant/maintenance"
                className="rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default NewMaintenance;