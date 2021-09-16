window.BENCHMARK_DATA = {
  "lastUpdate": 1631752757924,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "a931845a8622e2ff2ca8a35d36fa452ef12bb3e0",
          "message": "Merge pull request #332 from TeoZosa/dependabot/pip/hypothesis-6.21.3",
          "timestamp": "2021-09-15T13:21:09Z",
          "tree_id": "fc4252e34008b9e9c898f2b0a37696c0c992b0e9"
        },
        "date": 1631712501556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13083.65269126743,
            "unit": "iter/sec",
            "range": "stddev: 0.0000547989160369623",
            "extra": "mean: 76.43125536857465 usec\nrounds: 1723"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3370502.083878388,
            "unit": "iter/sec",
            "range": "stddev: 0.000001013733227320237",
            "extra": "mean: 296.69170204139516 nsec\nrounds: 5182"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 10422.854290964142,
            "unit": "iter/sec",
            "range": "stddev: 0.000187851225316759",
            "extra": "mean: 95.94300870798197 usec\nrounds: 8842"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 114950.0441463476,
            "unit": "iter/sec",
            "range": "stddev: 0.000010862504466521543",
            "extra": "mean: 8.699431195753688 usec\nrounds: 45455"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14395.16285556673,
            "unit": "iter/sec",
            "range": "stddev: 0.00002789325949309638",
            "extra": "mean: 69.4677795613331 usec\nrounds: 8719"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4024405.2235930287,
            "unit": "iter/sec",
            "range": "stddev: 3.0563363958975625e-7",
            "extra": "mean: 248.4839235714821 nsec\nrounds: 44643"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "bab682c7568c0d0edacb92f146489d7c1c7d34b4",
          "message": ":green_heart: Fix ADR documentation publishing overwriting benchmark files",
          "timestamp": "2021-09-16T00:32:30Z",
          "tree_id": "96436cc35a167b58dc45e0e84709edcd703d93bc"
        },
        "date": 1631752754869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14221.584060386256,
            "unit": "iter/sec",
            "range": "stddev: 0.00009043063767018112",
            "extra": "mean: 70.3156551164695 usec\nrounds: 1876"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4090645.4586445345,
            "unit": "iter/sec",
            "range": "stddev: 3.4224152466244916e-7",
            "extra": "mean: 244.4601983012537 nsec\nrounds: 49023"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12143.950062339916,
            "unit": "iter/sec",
            "range": "stddev: 0.000021713024599115344",
            "extra": "mean: 82.34552965604985 usec\nrounds: 9408"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 118247.86414798412,
            "unit": "iter/sec",
            "range": "stddev: 0.000005417442975853677",
            "extra": "mean: 8.456812367862527 usec\nrounds: 43292"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14941.206450005086,
            "unit": "iter/sec",
            "range": "stddev: 0.00004107850055425676",
            "extra": "mean: 66.9289995654708 usec\nrounds: 9183"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3984591.3979666573,
            "unit": "iter/sec",
            "range": "stddev: 7.82094203576455e-7",
            "extra": "mean: 250.96676173893687 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}