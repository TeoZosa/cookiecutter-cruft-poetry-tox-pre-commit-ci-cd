"""
------------------------------------------------------------------------------------------------------------------ benchmark: 6 tests -----------------------------------------------------------------------------------------------------------------
Name (time in ns)                                                Min                     Max                   Mean                StdDev                 Median                   IQR             Outliers  OPS (Kops/s)            Rounds  Iterations
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
test_icontract_contract_off[no simulated computation]       155.3750 (1.0)       26,585.5000 (4.44)        187.7228 (1.0)        143.9644 (1.0)         174.8750 (1.00)        13.0625 (1.0)      1935;3778    5,327.0028 (1.0)      192419          16
test_baseline[no simulated computation]                     158.5000 (1.02)       5,981.6875 (1.0)         191.4941 (1.02)       152.0257 (1.06)        174.1250 (1.0)         15.2500 (1.17)     2386;3961    5,222.0926 (0.98)     196426          16
test_icontract_contract_on[no simulated computation]      3,699.0000 (23.81)    120,638.0000 (20.17)     4,800.4804 (25.57)    3,360.5701 (23.34)     4,320.0000 (24.81)      238.0000 (18.22)   1606;10894      208.3125 (0.04)      73834           1
test_baseline[simulated computation]                      3,621.0000 (23.30)     87,038.0000 (14.55)     7,124.2308 (37.95)    4,650.1666 (32.30)     6,324.0000 (36.32)    1,691.7500 (129.51)   1070;1626      140.3660 (0.03)      22383           1
test_icontract_contract_off[simulated computation]        3,306.0000 (21.28)    230,117.0000 (38.47)     7,628.8184 (40.64)    4,879.4625 (33.89)     6,363.0000 (36.54)    2,881.0000 (220.56)   7390;7293      131.0819 (0.02)      94590           1
test_icontract_contract_on[simulated computation]         8,373.0000 (53.89)    143,609.0000 (24.01)    14,311.7593 (76.24)    8,064.5305 (56.02)    11,680.0000 (67.08)    2,796.0000 (214.05)   1704;2944       69.8726 (0.01)      19479           1
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
OPS: Operations Per Second, computed as 1 / Mean
============================== 8 passed in 6.43s ===============================

tl;dr: 1µs overhead for icontract
------------------------------------------------------------------------------------------------------------------ benchmark: 6 tests -----------------------------------------------------------------------------------------------------------------
Name (time in ns)                                                Min                     Max                   Mean                StdDev                 Median                   IQR             Outliers  OPS (Kops/s)            Rounds  Iterations
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**test_icontract_contract_off[simulated computation]**    3,306.0000 (21.28)    230,117.0000 (38.47)     7,628.8184 (40.64)    4,879.4625 (33.89)     6,363.0000 (36.54)    2,881.0000 (220.56)   7390;7293      131.0819 (0.02)      94590           1
  test_baseline[simulated computation]                    3,621.0000 (23.30)     87,038.0000 (14.55)     7,124.2308 (37.95)    4,650.1666 (32.30)     6,324.0000 (36.32)    1,691.7500 (129.51)   1070;1626      140.3660 (0.03)      22383           1
**test_icontract_contract_on[no simulated computation]**  3,699.0000 (23.81)    120,638.0000 (20.17)     4,800.4804 (25.57)    3,360.5701 (23.34)     4,320.0000 (24.81)      238.0000 (18.22)   1606;10894      208.3125 (0.04)      73834           1

"""
import time

import icontract
import pytest

allowed_pets = ["cats", "kittens", "dogs", "puppies"]


def legal_pet(desired_pet: str, do_computation_simulation):
    if do_computation_simulation:
        time.sleep(0.000001)  # Simulate arbitrary (1µs) computation time
    return desired_pet


def legal_pet_baseline(desired_pet: str, do_computation_simulation=False):
    """Allows any desired pet (most permissive)"""
    return legal_pet(desired_pet, do_computation_simulation)


@icontract.require(lambda desired_pet: desired_pet in allowed_pets, enabled=True)
def legal_pet_on(desired_pet: str, do_computation_simulation=False):
    """Validates the desired pet is an allowed pet"""
    return legal_pet(desired_pet, do_computation_simulation)


@icontract.require(lambda desired_pet: desired_pet in allowed_pets, enabled=False)
def legal_pet_off(desired_pet: str, do_computation_simulation=False):
    """Does not validate the desired pet is an allowed pet"""
    return legal_pet(desired_pet, do_computation_simulation)


@pytest.mark.parametrize(
    "do_computation_simulation",
    [True, False],
    ids=["simulated computation", "no simulated computation"],
)
class TestDesignByContractPerformance:
    @staticmethod
    def test_icontract_contract_enforcement(do_computation_simulation) -> None:
        with pytest.raises(icontract.errors.ViolationError):
            legal_pet_on("lions", do_computation_simulation)

    @staticmethod
    def test_baseline(benchmark, do_computation_simulation) -> None:
        assert (
            benchmark(legal_pet_baseline, "kittens", do_computation_simulation)
            in allowed_pets
        )

    @staticmethod
    def test_icontract_contract_on(benchmark, do_computation_simulation) -> None:
        assert (
            benchmark(legal_pet_on, "kittens", do_computation_simulation)
            in allowed_pets
        )

    @staticmethod
    def test_icontract_contract_off(benchmark, do_computation_simulation) -> None:
        assert (
            benchmark(legal_pet_off, "kittens", do_computation_simulation)
            in allowed_pets
        )
