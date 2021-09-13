window.BENCHMARK_DATA = {
  "lastUpdate": 1631544569151,
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
          "id": "dba7f1e3f4a9dd38b46dfd7303b14d987f949842",
          "message": "Merge pull request #328 from TeoZosa/dependabot/pip/sphinx-4.2.0",
          "timestamp": "2021-09-13T14:36:38Z",
          "tree_id": "dbd51bc5f91c2e29dcb38b834834eb3e85fdb797"
        },
        "date": 1631544566072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14715.202311869576,
            "unit": "iter/sec",
            "range": "stddev: 0.00007800680072337695",
            "extra": "mean: 67.95693180469425 usec\nrounds: 8285"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3867443.607574578,
            "unit": "iter/sec",
            "range": "stddev: 6.869304867104455e-7",
            "extra": "mean: 258.56873466502793 nsec\nrounds: 181786"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11846.160846269177,
            "unit": "iter/sec",
            "range": "stddev: 0.0000546110573474614",
            "extra": "mean: 84.4155345328558 usec\nrounds: 7949"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116065.04970112721,
            "unit": "iter/sec",
            "range": "stddev: 0.000016888645486431214",
            "extra": "mean: 8.6158581121108 usec\nrounds: 31250"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14858.286244692188,
            "unit": "iter/sec",
            "range": "stddev: 0.00005599290693241338",
            "extra": "mean: 67.30251278859492 usec\nrounds: 11299"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3806422.1121590137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012471266521426825",
            "extra": "mean: 262.713900490604 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}