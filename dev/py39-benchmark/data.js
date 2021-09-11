window.BENCHMARK_DATA = {
  "lastUpdate": 1631336740103,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
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
          "id": "63a8dd7083e680d0486e61a58154ba808daef274",
          "message": ":rotating_light: Silence spurious missing intra-package imports",
          "timestamp": "2021-09-11T04:59:44Z",
          "tree_id": "70806ea68a4fcbc2a1a92cecaea2e88ca50bdb6a"
        },
        "date": 1631336737128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14382.531093925116,
            "unit": "iter/sec",
            "range": "stddev: 0.00001593519685319611",
            "extra": "mean: 69.52879110564756 usec\nrounds: 12255"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3981367.159892099,
            "unit": "iter/sec",
            "range": "stddev: 1.360487098236398e-8",
            "extra": "mean: 251.17000262456656 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12589.87712149127,
            "unit": "iter/sec",
            "range": "stddev: 0.000015904295357627487",
            "extra": "mean: 79.42889278029347 usec\nrounds: 8795"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 125070.67375074174,
            "unit": "iter/sec",
            "range": "stddev: 6.217588794727568e-7",
            "extra": "mean: 7.995479435834329 usec\nrounds: 40483"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14372.195392743302,
            "unit": "iter/sec",
            "range": "stddev: 0.00004129501655066885",
            "extra": "mean: 69.57879243034174 usec\nrounds: 13422"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3296196.2326181177,
            "unit": "iter/sec",
            "range": "stddev: 5.611087660339331e-8",
            "extra": "mean: 303.37999604038004 nsec\nrounds: 5079"
          }
        ]
      }
    ]
  }
}