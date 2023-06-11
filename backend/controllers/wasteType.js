const WasteType = require('../models/wasteType');

const createWasteType = async (req, res) => {
  const { name, description, acceptedMaterials, recyclingInfo } = req.body;

  try {
    const newWasteType = new WasteType({
      name,
      description,
      acceptedMaterials,
      recyclingInfo
    });

    await newWasteType.save();
    return res.status(201).json(newWasteType);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getWasteTypes = async (req, res) => {
  try {
    const wasteTypes = await WasteType.find();
    return res.json(wasteTypes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getWasteTypeById = async (req, res) => {
  const { id } = req.params;

  try {
    const wasteType = await WasteType.findById(id);
    if (!wasteType) {
      return res.status(404).json({ error: 'Waste type not found' });
    }
    return res.json(wasteType);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateWasteType = async (req, res) => {
  const { id } = req.params;
  const { name, description, acceptedMaterials, recyclingInfo } = req.body;

  try {
    const updatedWasteType = await WasteType.findByIdAndUpdate(
      id,
      {
        name,
        description,
        acceptedMaterials,
        recyclingInfo
      },
      { new: true }
    );
    if (!updatedWasteType) {
      return res.status(404).json({ error: 'Waste type not found' });
    }
    return res.json(updatedWasteType);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteWasteType = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedWasteType = await WasteType.findByIdAndDelete(id);
    if (!deletedWasteType) {
      return res.status(404).json({ error: 'Waste type not found' });
    }
    return res.json({ message: 'Waste type deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createWasteType,
  getWasteTypes,
  getWasteTypeById,
  updateWasteType,
  deleteWasteType
};
