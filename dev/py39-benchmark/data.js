window.BENCHMARK_DATA = {
  "lastUpdate": 1628519857655,
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
          "id": "583bd6dee0a284f37832c2c33ba6592d3ab0573f",
          "message": "Merge pull request #279 from TeoZosa/dependabot/pip/xdoctest-0.15.6",
          "timestamp": "2021-08-09T14:15:12Z",
          "tree_id": "32cd8f4b9c13c89835b1cd3d11249e9b2e1940b5"
        },
        "date": 1628519856004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15479.169246970025,
            "unit": "iter/sec",
            "range": "stddev: 0.00001944128227278705",
            "extra": "mean: 64.60295020004031 usec\nrounds: 12048"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4193668.8678059117,
            "unit": "iter/sec",
            "range": "stddev: 2.8794950768376576e-8",
            "extra": "mean: 238.45468765452753 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12934.498939483137,
            "unit": "iter/sec",
            "range": "stddev: 0.00006491139853673237",
            "extra": "mean: 77.31261989186571 usec\nrounds: 9250"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132715.01391673033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011069074803510585",
            "extra": "mean: 7.534942509424233 usec\nrounds: 45451"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15379.147451963738,
            "unit": "iter/sec",
            "range": "stddev: 0.00002610300838879822",
            "extra": "mean: 65.0231102291897 usec\nrounds: 13227"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4214971.025699212,
            "unit": "iter/sec",
            "range": "stddev: 7.454577266392179e-8",
            "extra": "mean: 237.24955495592997 nsec\nrounds: 185151"
          }
        ]
      }
    ]
  }
}