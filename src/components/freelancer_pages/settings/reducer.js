import { EditProfileModel } from "./model"
import {
  fetchEditProfile,
  loadEditProfile,
  fetchServiceProposal,
  loadServiceProposal,
  fetchMilestone,
  loadMilestone,
  DeleteServiceProposal,
  loadDeleteServiceProposal,
  fetchProposedServices,
  loadProposedServices,
  LoadAddServiceProposal,
  FetchSingleproposedService,
  loadSingleServiceProposal,
  LoadDeleteMilestone,LoadDeleteProposedService,
  LoadDeleteProposalService,addsinglePortfolio ,UpdateServiceProposal,addMileStone,
  fetchallPortfolios ,
  portfoliosLoadedall,fetchMerchantReviews,LoadMerchantReviews,
  loadServiceMenu,LoadUPDATEPortfolio,LoadUPDATEFaq,
  FetchServiceMenu,  FetchSingleServiceMenu,LoadAddReview,LoaddeleteReview,
  loadSingleServiceMenu,LoadAddEmail,fetchsingleMerchantReview,LoadsingleMerchantReview,
  FetchSinglemenuService,fetchFaqs,faqsLoaded,deleteFaq,fetchSingleFaqs,LoadedSingleFaq,LoadAddaccounts,LoadupdateReview,
  loadSinglemenuService,UpdateServiceMenu,LoadDeleteServiceMenu,LoadDeletemenuservice,LoadAddServiceMenu,deletePortfolio,FetchSinglePortfolio,loadSinglemenuPortfolio,createFaq
} from "./actions"
const initialState = EditProfileModel()


export default function JobRequestsReducer(state = initialState, action) {
  switch (action.type) {
    case fetchEditProfile().type:
      return state.merge({
        EditProfile: action.payload,
      })
    case loadEditProfile().type:
      return state.merge({
        EditProfile: action.payload,
      })
      case fetchsingleMerchantReview().type:
        return state.merge({
          editmerchantReview: action.payload,
        })
      case LoadsingleMerchantReview().type:
        return state.merge({
          editmerchantReview: action.payload,
        })
      case fetchMerchantReviews().type:
      return state.merge({
        merchantReviews: action.payload,
      })
    case LoadMerchantReviews().type:
      return state.merge({
        merchantReviews: action.payload,
      })
      case fetchSingleFaqs().type:
        return state.merge({
          editfaq: action.payload,
        })
      case LoadedSingleFaq().type:
        return state.merge({
          editfaq: action.payload,
        })
      case fetchFaqs().type:
        return state.merge({
          faqs: action.payload,
        })
      case faqsLoaded().type:
        return state.merge({
          faqs: action.payload,
        })

      case FetchSinglePortfolio().type:
        return state.merge({
          editPortfolio: action.payload,
        })
      case loadSinglemenuPortfolio().type:
        return state.merge({
          editPortfolio: action.payload, 
        })
      case FetchSinglemenuService().type:
        return state.merge({
          menuService: action.payload,
        })
      case loadSinglemenuService().type:
        return state.merge({
          menuService: action.payload,
        })
        
      case FetchSingleServiceMenu().type:
        return state.merge({
          EditmenuServices: action.payload,
        })
      case loadSingleServiceMenu().type:
        return state.merge({
          EditmenuServices: action.payload,
        })
      case FetchServiceMenu().type:
      return state.merge({
        SavedMenu: action.payload,
      })
    case loadServiceMenu().type:
      return state.merge({
        SavedMenu: action.payload,
      })
    case fetchServiceProposal().type:
      return state.merge({
        ServiceProposal: action.payload,
      })
    case loadServiceProposal().type:
      return state.merge({
        ServiceProposal: action.payload,
      })
    case fetchMilestone().type:
      return state.merge({
        MilesTone: action.payload,
      })
    case loadMilestone().type:
      return state.merge({
        MilesTone: action.payload,
      })
    case DeleteServiceProposal().type:
      return state.merge({
        deleteService: action.payload,
      })
    case loadDeleteServiceProposal().type:
      return state.merge({
        deleteService: action.payload,
      })
    case fetchProposedServices().type:
      return state.merge({
        proposedServices: action.payload,
      })
    case loadProposedServices().type:
      return state.merge({
        proposedServices: action.payload,
      })
    case FetchSingleproposedService().type:
      return state.merge({
        EditproposedServices: action.payload,
      })
    case loadSingleServiceProposal().type:
      return state.merge({
        EditproposedServices: action.payload,
      })
    case LoadAddServiceProposal().type:
      return state.merge({
        EditproposedServices: action.payload,
      })
      case LoadDeleteMilestone().type:
        return state.merge({
          EditproposedServices: action.payload,
        })
        case LoadDeleteProposedService().type:
          return state.merge({
            EditproposedServices: action.payload,
          })
          case LoadDeleteProposalService().type:
            return state.merge({
              EditproposedServices: action.payload,
            })
            case addsinglePortfolio().type:
              return state.merge({
                actionsData: action.payload,
              })
              case UpdateServiceProposal().type:
                return state.merge({
                  EditproposedServices: action.payload,
                })
                case addMileStone().type:
                  return state.merge({
                    MilesTone: action.payload,
                  })
                  case fetchallPortfolios().type:
      return state.merge({
        portfolios: action.payload,
      })
    case portfoliosLoadedall().type:
      return state.merge({
        portfolios: action.payload,
      })
      case UpdateServiceMenu().type:
        return state.merge({
          portfolios: action.payload,
        })
        case LoadDeleteServiceMenu().type:
          return state.merge({
            portfolios: action.payload,
          })
          case LoadDeletemenuservice().type:
            return state.merge({
              portfolios: action.payload,
            })
            case LoadAddServiceMenu().type:
              return state.merge({
                portfolios: action.payload,
              })
              case deletePortfolio().type:
                return state.merge({
                  actionsData: action.payload,
                })
                case createFaq().type:
                  return state.merge({
                    actionsData: action.payload,
                  })
                  case deleteFaq().type:
                    return state.merge({
                      actionsData: action.payload,
                    })
                    case LoadUPDATEPortfolio().type:
                      return state.merge({
                        actionsData: action.payload,
                      })
                      case LoadUPDATEFaq().type:
                        return state.merge({
                          actionsData: action.payload,
                        })
                        case LoadAddReview().type:
                          return state.merge({
                            actionsData: action.payload,
                          })
                          case LoadAddEmail().type:
                            return state.merge({
                              actionsData: action.payload,
                            })
                            case LoaddeleteReview().type:
                            return state.merge({
                              actionsData: action.payload,
                            })
                            case LoadAddaccounts().type:
                            return state.merge({
                              actionsData: action.payload,
                            })
                            case LoadupdateReview().type:
                              return state.merge({
                                actionsData: action.payload,
                              })
                    default:
                      return state
                  }
}
