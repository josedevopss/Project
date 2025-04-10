import Chef from "../models/Chef.js";

// Get all chefs (only return name, image, bio)
export const getChefs = async (req, res) => {
  try {
    // Retrieve only the required fields
    const chefs = await Chef.find(
      { access: "approved" },
      { firstName: 1, lastName: 1, bio: 1, image: 1 }
    ).lean();

    // Map results to include a combined name field
    const chefsWithName = chefs.map((chef) => ({
      name: `${chef.firstName} ${chef.lastName}`,
      image: chef.image || `https://robohash.org/mail@ashallendesign.co.uk`,
      bio: chef.bio || "",
      _id: chef._id,
    }));

    res.status(200).json(chefsWithName);
  } catch (error) {
    console.error("Error fetching chefs:", error);
    res.status(500).json({ error: "Failed to fetch chefs." });
  }
};

// Existing function to create a chef application (for reference)
export const createApplication = async (req, res) => {
  console.log(req.body)
  try {
    const { firstName, lastName, email, phone, bio, image } = req.body;
    const resumePath = req.file ? req.file.path : null;

    if (!resumePath) {
      return res.status(400).json({ error: "Resume file is required." });
    }

    const newApplication = new Chef({
      firstName,
      lastName,
      email,
      phone,
      bio,
      image, // Optional: you may supply an image URL here
      resume: resumePath,
    });

    await newApplication.save();
    return res.status(201).json({
      message: "Application submitted successfully",
      data: newApplication,
    });
  } catch (error) {
    console.error("Error creating application:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        error: `Duplicate ${duplicateField} provided.`,
      });
    }

    return res
      .status(500)
      .json({ error: "Error while submitting the application." });
  }
};

// Get all chef applications (for admin view)
export const getAllChefApplications = async (req, res) => {
  try {
    // Return all fields (or select specific ones if needed)
    const chefs = await Chef.find({}).lean();

    // Map results to include a combined name field
    const chefsWithName = chefs.map((chef) => ({
      name: `${chef.firstName} ${chef.lastName}`,
      bio: chef.bio || "",
      email: chef.email,
      phone: chef.phone,
      resume: chef.resume,
      access: chef.access,
      _id: chef._id,
    }));

    res.status(200).json(chefsWithName);
  } catch (error) {
    console.error("Error fetching chef applications:", error);
    res.status(500).json({ error: "Failed to fetch chef applications." });
  }
};

// Approve a chef application
// export const approveApplication = async (req, res) => {
//   try {
//     const updatedChef = await Chef.findByIdAndUpdate(
//       req.params.id,
//       { access: "approved" },
//       { new: true }
//     );
//     if (!updatedChef) {
//       return res.status(404).json({ error: "Chef application not found." });
//     }
//     res.status(200).json(updatedChef);
//   } catch (error) {
//     console.error("Error approving application:", error);
//     res.status(500).json({ error: "Failed to approve application." });
//   }
// };

export const updateApplicationStatus = async (req, res) => {
  try {
    const { access } = req.body; // Use the provided status
    const updatedChef = await Chef.findByIdAndUpdate(
      req.params.id,
      { access: access },
      { new: true }
    );
    if (!updatedChef) {
      return res.status(404).json({ error: "Chef application not found." });
    }
    res.status(200).json(updatedChef);
  } catch (error) {
    console.error("Error updating application status:", error);
    res.status(500).json({ error: "Failed to update application status." });
  }
};